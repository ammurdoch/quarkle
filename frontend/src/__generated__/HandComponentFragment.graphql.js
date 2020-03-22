/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type HandComponentFragment$ref: FragmentReference;
declare export opaque type HandComponentFragment$fragmentType: HandComponentFragment$ref;
export type HandComponentFragment = {|
  +id: string,
  +name: string,
  +score: number,
  +hand: ?{|
    +edges: $ReadOnlyArray<?{|
      +cursor: string,
      +node: ?{|
        +id: string,
        +shape: string,
        +color: string,
      |},
    |}>
  |},
  +$refType: HandComponentFragment$ref,
|};
export type HandComponentFragment$data = HandComponentFragment;
export type HandComponentFragment$key = {
  +$data?: HandComponentFragment$data,
  +$fragmentRefs: HandComponentFragment$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "HandComponentFragment",
  "type": "PlayerNode",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "playerId",
      "type": "String!",
      "defaultValue": ""
    }
  ],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "score",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "hand",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "playerId",
          "variableName": "playerId"
        }
      ],
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
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "TileNode",
              "plural": false,
              "selections": [
                (v0/*: any*/),
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
              ]
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fe93a219b3f8ce92ebe2cb0453d12837';

module.exports = node;
