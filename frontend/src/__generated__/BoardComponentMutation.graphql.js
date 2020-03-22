/**
 * @flow
 * @relayHash 8e2b2b4ce39820df89ece71ccc21df99
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PositionInput = {|
  x: number,
  y: number,
|};
export type BoardComponentMutationVariables = {|
  gameId: string,
  playerId: string,
  tileId: string,
  position?: ?PositionInput,
|};
export type BoardComponentMutationResponse = {|
  +makeMove: ?{|
    +ok: ?boolean
  |}
|};
export type BoardComponentMutation = {|
  variables: BoardComponentMutationVariables,
  response: BoardComponentMutationResponse,
|};
*/


/*
mutation BoardComponentMutation(
  $gameId: String!
  $playerId: String!
  $tileId: ID!
  $position: PositionInput
) {
  makeMove(gameId: $gameId, playerId: $playerId, tileId: $tileId, position: $position) {
    ok
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
    "name": "tileId",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "position",
    "type": "PositionInput",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "makeMove",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "gameId",
        "variableName": "gameId"
      },
      {
        "kind": "Variable",
        "name": "playerId",
        "variableName": "playerId"
      },
      {
        "kind": "Variable",
        "name": "position",
        "variableName": "position"
      },
      {
        "kind": "Variable",
        "name": "tileId",
        "variableName": "tileId"
      }
    ],
    "concreteType": "MakeMove",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "ok",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "BoardComponentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "BoardComponentMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "BoardComponentMutation",
    "id": null,
    "text": "mutation BoardComponentMutation(\n  $gameId: String!\n  $playerId: String!\n  $tileId: ID!\n  $position: PositionInput\n) {\n  makeMove(gameId: $gameId, playerId: $playerId, tileId: $tileId, position: $position) {\n    ok\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1753065ecb9934b4e3895943f314c447';

module.exports = node;
