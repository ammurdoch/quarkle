/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ScoreBoardComponentFragment$ref: FragmentReference;
declare export opaque type ScoreBoardComponentFragment$fragmentType: ScoreBoardComponentFragment$ref;
export type ScoreBoardComponentFragment = {|
  +players: {|
    +edges: $ReadOnlyArray<?{|
      +cursor: string,
      +node: ?{|
        +id: string,
        +name: string,
        +score: number,
      |},
    |}>
  |},
  +$refType: ScoreBoardComponentFragment$ref,
|};
export type ScoreBoardComponentFragment$data = ScoreBoardComponentFragment;
export type ScoreBoardComponentFragment$key = {
  +$data?: ScoreBoardComponentFragment$data,
  +$fragmentRefs: ScoreBoardComponentFragment$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ScoreBoardComponentFragment",
  "type": "GameNode",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
              "concreteType": "PlayerNode",
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
(node/*: any*/).hash = 'c9284d2b3df871ce5eb46e72612f02ef';

module.exports = node;
