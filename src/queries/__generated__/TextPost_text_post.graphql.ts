/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type TextPost_text_post = {
    readonly uuid: string;
    readonly content: string;
    readonly " $refType": "TextPost_text_post";
};
export type TextPost_text_post$data = TextPost_text_post;
export type TextPost_text_post$key = {
    readonly " $data"?: TextPost_text_post$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"TextPost_text_post">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TextPost_text_post",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "uuid",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "content",
      "storageKey": null
    }
  ],
  "type": "text_post",
  "abstractKey": null
};
(node as any).hash = '8122b09da18a062d56589314f50ede95';
export default node;
