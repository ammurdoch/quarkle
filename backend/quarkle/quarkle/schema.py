import graphene

import game.schema


class Query(
    game.schema.Query,
    graphene.ObjectType,
):
    pass


class Mutation(
    game.schema.Mutation,
    graphene.ObjectType,
):
    pass


class Subscription(
    game.schema.Subscription, graphene.ObjectType,
):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation, subscription=Subscription)
