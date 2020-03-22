/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type BoardComponentFragment$ref: FragmentReference;
declare export opaque type BoardComponentFragment$fragmentType: BoardComponentFragment$ref;
export type BoardComponentFragment = {|
  +tilesPlayed: {|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +x: number,
        +y: number,
        +tile: ?{|
          +id: string,
          +shape: string,
          +color: string,
        |},
      |}
    |}>
  |},
  +$refType: BoardComponentFragment$ref,
|};
export type BoardComponentFragment$data = BoardComponentFragment;
export type BoardComponentFragment$key = {
  +$data?: BoardComponentFragment$data,
  +$fragmentRefs: BoardComponentFragment$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "BoardComponentFragment",
  "type": "GameNode",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "id",
                      "args": null,
                      "storageKey": null
                    },
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'f67e2e9c0ece8f696a2c7f0aa5598d32';

module.exports = node;
