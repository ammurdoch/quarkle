import graphene
from graphene import relay
import channels_graphql_ws
from graphene_django import DjangoObjectType
from .models import Game, Player, BoardPosition, Tile
from django.shortcuts import get_object_or_404
from graphql_relay.node.node import from_global_id
from .constants import Shapes, Colors


class GameNode(DjangoObjectType):
    class Meta:
        model = Game
        interfaces = (relay.Node,)


class TileNode(DjangoObjectType):
    class Meta:
        model = Tile
        interfaces = (relay.Node,)


class TileConnection(relay.Connection):
    class Meta:
        node = TileNode


class PlayerNode(DjangoObjectType):
    class Meta:
        model = Player
        interfaces = (relay.Node,)

    hand = graphene.ConnectionField(
        TileConnection,
        player_id=graphene.String(required=True)
    )

    def resolve_hand(self, info, player_id):
        if str(self.id) == player_id:
            return self.hand.order_by("order")
        return Tile.objects.none()


class BoardPositionNode(DjangoObjectType):
    class Meta:
        model = BoardPosition
        interfaces = (relay.Node,)


class MyGameNode(graphene.ObjectType):
    class Meta:
        interfaces = (relay.Node,)

    game = graphene.Field(GameNode)
    you = graphene.Field(
        PlayerNode,
        player_id=graphene.String(required=True)
    )

    def resolve_you(self, info, player_id):
        try:
            player = Player.objects.get(id=player_id)
        except Player.DoesNotExist:
            player = None
        return player


def create_game(game_id):
    game = Game.objects.create(id=game_id)
    for i in range(3):
        for s in Shapes:
            for c in Colors:
                Tile.objects.create(game=game, color=c, shape=s)
    return game


def create_hand(game, player):
    stack = game.stack.all().filter(player=None, board_position=None).order_by("order")
    for i in range(6):
        if i < len(stack):
            tile = stack[i]
            tile.player = player
            tile.save()


def refill_hand(game, player):
    stack = game.stack.all().filter(player=None, board_position=None).order_by("order")
    current_hand = player.hand.all()
    number_to_replace = 6 - len(current_hand)
    for i in range(number_to_replace):
        if i < len(stack):
            tile = stack[i]
            tile.player = player
            tile.save()


class GameSubscription(channels_graphql_ws.Subscription):
    """Simple GraphQL subscription."""

    # Subscription payload.
    my_game = graphene.Field(MyGameNode)

    class Arguments:
        """That is how subscription arguments are defined."""
        game_id = graphene.String(required=True)

    @staticmethod
    def subscribe(root, info, game_id):
        """Called when user subscribes."""
        return [game_id]

    @staticmethod
    def publish(payload, info, game_id):
        """Called to notify the client."""

        # Here `payload` contains the `payload` from the `broadcast()`
        # invocation (see below). You can return `MySubscription.SKIP`
        # if you wish to suppress the notification to a particular
        # client. For example, this allows to avoid notifications for
        # the actions made by this particular client.
        game = Game.objects.get(id=game_id)

        return GameSubscription(my_game=MyGameNode(game=game))

    @classmethod
    def new_move(cls, game):
        """Auxiliary function to send subscription notifications.
        It is generally a good idea to encapsulate broadcast invocation
        inside auxiliary class methods inside the subscription class.
        That allows to consider a structure of the `payload` as an
        implementation details.
        """
        cls.broadcast(
            group=str(game.id),
            payload={},
        )


class PositionInput(graphene.InputObjectType):
    x = graphene.Int(required=True)
    y = graphene.Int(required=True)


class MakeMove(graphene.Mutation):
    """Make a move"""

    ok = graphene.Boolean()

    class Arguments:
        """Mutation arguments."""

        game_id = graphene.String(required=True)
        player_id = graphene.String(required=True)
        tile_id = graphene.ID(required=True)
        position = graphene.Argument(PositionInput)

    def mutate(self, info, game_id, player_id, tile_id, position):
        """Mutation "resolver" - store and broadcast a message."""
        print('makeMove', tile_id)
        game = get_object_or_404(Game, id=game_id)
        player = get_object_or_404(Player, id=player_id)
        tile = get_object_or_404(Tile, id=from_global_id(tile_id)[1])
        board_position = BoardPosition.objects.create(game=game, x=position.x, y=position.y)
        tile.board_position = board_position
        tile.player = None
        tile.save()

        refill_hand(game, player)

        players = game.players.all()
        player_index = 0
        for i, p in enumerate(players):
            if game.turn == p:
                player_index = i
        if player_index == len(players) - 1:
            player_index = 0
        else:
            player_index += 1
        game.turn = players[player_index]
        game.save()

        # Notify subscribers.
        GameSubscription.new_move(game)

        return MakeMove(ok=True)


class JoinGame(graphene.Mutation):
    """Make a move"""

    my_game = graphene.Field(MyGameNode)

    class Arguments:
        """Mutation arguments."""

        game_id = graphene.String(required=True)
        player_id = graphene.String(required=True)
        player_name = graphene.String(required=True)

    def mutate(self, info, game_id, player_id, player_name):
        """Mutation "resolver" - store and broadcast a message."""

        try:
            game = Game.objects.get(id=game_id)
            new_game = False
        except Game.DoesNotExist:
            game = create_game(game_id)
            new_game = True

        try:
            player = Player.objects.get(id=player_id)
            player.game = game
            player.save()
        except Player.DoesNotExist:
            player = Player.objects.create(id=player_id, name=player_name, game=game)
            create_hand(game, player)

        if new_game:
            game.turn = player
            game.save()

        # Notify subscribers.
        GameSubscription.new_move(game)

        return JoinGame(my_game=MyGameNode(game=game))


class Query(
    graphene.ObjectType,
):
    game = relay.Node.Field(GameNode)
    my_game = graphene.Field(
        MyGameNode,
        game_id=graphene.String(required=True),
    )

    def resolve_my_game(self, info, game_id):
        game = get_object_or_404(Game, id=game_id)
        return MyGameNode(game=game)


class Mutation(
    graphene.ObjectType,
):
    make_move = MakeMove.Field()
    join_game = JoinGame.Field()


class Subscription(
    graphene.ObjectType,
):
    follow_game = GameSubscription.Field()


schema = graphene.Schema(
    query=Query,
    mutation=Mutation,
    subscription=Subscription
)
