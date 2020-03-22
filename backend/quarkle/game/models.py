from django.db import models
import uuid
import random


class Game(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    turn = models.ForeignKey("Player", on_delete=models.SET_NULL, related_name="my_turn", null=True)


class BoardPosition(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    game = models.ForeignKey("Game", on_delete=models.CASCADE, related_name="tiles_played")
    x = models.PositiveIntegerField()
    y = models.PositiveIntegerField()

    class Meta:
        unique_together = [['x', 'y', 'game']]


def default_order():
    return random.random()


class Tile(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    game = models.ForeignKey("Game", on_delete=models.CASCADE, related_name="stack")
    player = models.ForeignKey("Player", on_delete=models.CASCADE, related_name="hand", null=True)
    board_position = models.OneToOneField("BoardPosition", on_delete=models.CASCADE, related_name="tile", null=True)
    color = models.CharField(max_length=100)
    shape = models.CharField(max_length=100)
    order = models.FloatField(default=default_order)


class Player(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    game = models.ForeignKey("Game", on_delete=models.CASCADE, related_name="players")
    score = models.PositiveIntegerField(default=0)
