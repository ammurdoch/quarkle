# mysite/routing.py
from channels.routing import ProtocolTypeRouter, URLRouter
from django.urls import path
from game.consumer import GameGraphqlWsConsumer


application = ProtocolTypeRouter(
    {
        # (http->django views is added by default)
        'websocket': URLRouter([
            path('graphql/', GameGraphqlWsConsumer),
        ])
    }
)
