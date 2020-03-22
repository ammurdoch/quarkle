/**
 * @flow
 * @relayHash 66518bc309bb2fb3b30f73dd309bb4c9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { BoardComponentFragment$ref } from "./BoardComponentFragment.graphql";
import type { HandComponentFragment$ref } from "./HandComponentFragment.graphql";
import type { ScoreBoardComponentFragment$ref } from "./ScoreBoardComponentFragment.graphql";
export type GameComponentMutationVariables = {|
  gameId: string,
  playerId: string,
  playerName: string,
|};
export type GameComponentMutationResponse = {|
  +joinGame: ?{|
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
export type GameComponentMutation = {|
  variables: GameComponentMutationVariables,
  response: GameComponentMutationResponse,
|};
*/


/*
mutation GameComponentMutation(
  $gameId: String!
  $playerId: String!
  $playerName: String!
) {
  joinGame(gameId: $gameId, playerId: $playerId, playerName: $playerName) {
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
  },
  {
    "kind": "LocalArgument",
    "name": "playerName",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "Variable",
  "name": "playerId",
  "variableName": "playerId"
},
v2 = [
  {
    "kind": "Variable",
    "name": "gameId",
    "variableName": "gameId"
  },
  (v1/*: any*/),
  {
    "kind": "Variable",
    "name": "playerName",
    "variableName": "playerName"
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "turn",
  "storageKey": null,
  "args": null,
  "concreteType": "PlayerNode",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    (v4/*: any*/)
  ]
},
v6 = [
  (v1/*: any*/)
],
v7 = [
  (v3/*: any*/),
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
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v9 = {
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
    "name": "GameComponentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "joinGame",
        "storageKey": null,
        "args": (v2/*: any*/),
        "concreteType": "JoinGame",
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
                  (v5/*: any*/),
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
                "args": (v6/*: any*/),
                "concreteType": "PlayerNode",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "kind": "FragmentSpread",
                    "name": "HandComponentFragment",
                    "args": (v6/*: any*/)
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
    "name": "GameComponentMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "joinGame",
        "storageKey": null,
        "args": (v2/*: any*/),
        "concreteType": "JoinGame",
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
                  (v5/*: any*/),
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
                                "selections": (v7/*: any*/)
                              },
                              (v3/*: any*/)
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
                          (v8/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "node",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "PlayerNode",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              (v4/*: any*/),
                              (v9/*: any*/)
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  (v3/*: any*/)
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "you",
                "storageKey": null,
                "args": (v6/*: any*/),
                "concreteType": "PlayerNode",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v9/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "hand",
                    "storageKey": null,
                    "args": (v6/*: any*/),
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
                          (v8/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "node",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "TileNode",
                            "plural": false,
                            "selections": (v7/*: any*/)
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              (v3/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "GameComponentMutation",
    "id": null,
    "text": "mutation GameComponentMutation(\n  $gameId: String!\n  $playerId: String!\n  $playerName: String!\n) {\n  joinGame(gameId: $gameId, playerId: $playerId, playerName: $playerName) {\n    myGame {\n      game {\n        turn {\n          id\n          name\n        }\n        ...BoardComponentFragment\n        ...ScoreBoardComponentFragment\n        id\n      }\n      you(playerId: $playerId) {\n        id\n        ...HandComponentFragment_2bzg04\n      }\n      id\n    }\n  }\n}\n\nfragment BoardComponentFragment on GameNode {\n  tilesPlayed {\n    edges {\n      node {\n        x\n        y\n        tile {\n          id\n          shape\n          color\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment HandComponentFragment_2bzg04 on PlayerNode {\n  id\n  name\n  score\n  hand(playerId: $playerId) {\n    edges {\n      cursor\n      node {\n        id\n        shape\n        color\n      }\n    }\n  }\n}\n\nfragment ScoreBoardComponentFragment on GameNode {\n  players {\n    edges {\n      cursor\n      node {\n        id\n        name\n        score\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2aa4c3a3b417def96fcdf606e9299eef';

module.exports = node;
