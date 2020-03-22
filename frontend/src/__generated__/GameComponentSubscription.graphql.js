/**
 * @flow
 * @relayHash 7fd36001fb7dfca02a43543f80e0af35
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { BoardComponentFragment$ref } from "./BoardComponentFragment.graphql";
import type { HandComponentFragment$ref } from "./HandComponentFragment.graphql";
import type { ScoreBoardComponentFragment$ref } from "./ScoreBoardComponentFragment.graphql";
export type GameComponentSubscriptionVariables = {|
  gameId: string,
  playerId: string,
|};
export type GameComponentSubscriptionResponse = {|
  +followGame: ?{|
    +myGame: ?{|
      +game: ?{|
        +turn: ?{|
          +id: string,
          +name: string,
        |},
        +$fragmentRefs: BoardComponentFragment$ref & ScoreBoardComponentFragment$ref,
      |},
      +you: ?{|
        +id: string,
        +$fragmentRefs: HandComponentFragment$ref,
      |},
    |}
  |}
|};
export type GameComponentSubscription = {|
  variables: GameComponentSubscriptionVariables,
  response: GameComponentSubscriptionResponse,
|};
*/


/*
subscription GameComponentSubscription(
  $gameId: String!
  $playerId: String!
) {
  followGame(gameId: $gameId) {
    myGame {
      game {
        turn {
          id
          name
        }
        ...BoardComponentFragment
        ...ScoreBoardComponentFragment
        id
      }
      you(playerId: $playerId) {
        id
        ...HandComponentFragment_2bzg04
      }
      id
    }
  }
}

fragment BoardComponentFragment on GameNode {
  tilesPlayed {
    edges {
      node {
        x
        y
        tile {
          id
          shape
          color
        }
        id
      }
    }
  }
}

fragment HandComponentFragment_2bzg04 on PlayerNode {
  id
  name
  score
  hand(playerId: $playerId) {
    edges {
      cursor
      node {
        id
        shape
        color
      }
    }
  }
}

fragment ScoreBoardComponentFragment on GameNode {
  players {
    edges {
      cursor
      node {
        id
        name
        score
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "gameId",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "playerId",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "gameId",
    "variableName": "gameId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "turn",
  "storageKey": null,
  "args": null,
  "concreteType": "PlayerNode",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    (v3/*: any*/)
  ]
},
v5 = [
  {
    "kind": "Variable",
    "name": "playerId",
    "variableName": "playerId"
  }
],
v6 = [
  (v2/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "shape",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "color",
    "args": null,
    "storageKey": null
  }
],
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "score",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "GameComponentSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "followGame",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "GameSubscription",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "myGame",
            "storageKey": null,
            "args": null,
            "concreteType": "MyGameNode",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "game",
                "storageKey": null,
                "args": null,
                "concreteType": "GameNode",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  {
                    "kind": "FragmentSpread",
                    "name": "BoardComponentFragment",
                    "args": null
                  },
                  {
                    "kind": "FragmentSpread",
                    "name": "ScoreBoardComponentFragment",
                    "args": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "you",
                "storageKey": null,
                "args": (v5/*: any*/),
                "concreteType": "PlayerNode",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "kind": "FragmentSpread",
                    "name": "HandComponentFragment",
                    "args": (v5/*: any*/)
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "GameComponentSubscription",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "followGame",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "GameSubscription",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "myGame",
            "storageKey": null,
            "args": null,
            "concreteType": "MyGameNode",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "game",
                "storageKey": null,
                "args": null,
                "concreteType": "GameNode",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "tilesPlayed",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "BoardPositionNodeConnection",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "edges",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "BoardPositionNodeEdge",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "node",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "BoardPositionNode",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "x",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "y",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "tile",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "TileNode",
                                "plural": false,
                                "selections": (v6/*: any*/)
                              },
                              (v2/*: any*/)
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "players",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "PlayerNodeConnection",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "edges",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "PlayerNodeEdge",
                        "plural": true,
                        "selections": [
                          (v7/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "node",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "PlayerNode",
                            "plural": false,
                            "selections": [
                              (v2/*: any*/),
                              (v3/*: any*/),
                              (v8/*: any*/)
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  (v2/*: any*/)
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "you",
                "storageKey": null,
                "args": (v5/*: any*/),
                "concreteType": "PlayerNode",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v8/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "hand",
                    "storageKey": null,
                    "args": (v5/*: any*/),
                    "concreteType": "TileConnection",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "edges",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "TileEdge",
                        "plural": true,
                        "selections": [
                          (v7/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "node",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "TileNode",
                            "plural": false,
                            "selections": (v6/*: any*/)
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "subscription",
    "name": "GameComponentSubscription",
    "id": null,
    "text": "subscription GameComponentSubscription(\n  $gameId: String!\n  $playerId: String!\n) {\n  followGame(gameId: $gameId) {\n    myGame {\n      game {\n        turn {\n          id\n          name\n        }\n        ...BoardComponentFragment\n        ...ScoreBoardComponentFragment\n        id\n      }\n      you(playerId: $playerId) {\n        id\n        ...HandComponentFragment_2bzg04\n      }\n      id\n    }\n  }\n}\n\nfragment BoardComponentFragment on GameNode {\n  tilesPlayed {\n    edges {\n      node {\n        x\n        y\n        tile {\n          id\n          shape\n          color\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment HandComponentFragment_2bzg04 on PlayerNode {\n  id\n  name\n  score\n  hand(playerId: $playerId) {\n    edges {\n      cursor\n      node {\n        id\n        shape\n        color\n      }\n    }\n  }\n}\n\nfragment ScoreBoardComponentFragment on GameNode {\n  players {\n    edges {\n      cursor\n      node {\n        id\n        name\n        score\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '370a82593cd313dfa2b31b14f58f2cc6';

module.exports = node;
