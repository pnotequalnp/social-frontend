/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type SlugUser_ProfileQueryVariables = {
    slug: string;
};
export type SlugUser_ProfileQueryResponse = {
    readonly user_connection: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly display: string | null;
                readonly created_at: unknown;
            };
        }>;
    };
};
export type SlugUser_ProfileQuery = {
    readonly response: SlugUser_ProfileQueryResponse;
    readonly variables: SlugUser_ProfileQueryVariables;
};



/*
query SlugUser_ProfileQuery(
  $slug: String!
) {
  user_connection(where: {slug: {_eq: $slug}}) {
    edges {
      node {
        id
        display
        created_at
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "slug"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "_eq",
                "variableName": "slug"
              }
            ],
            "kind": "ObjectValue",
            "name": "slug"
          }
        ],
        "kind": "ObjectValue",
        "name": "where"
      }
    ],
    "concreteType": "userConnection",
    "kind": "LinkedField",
    "name": "user_connection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "userEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "user",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "display",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "created_at",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SlugUser_ProfileQuery",
    "selections": (v1/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SlugUser_ProfileQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ae8e6f6fe38c6bb9205cf7b7e63a211e",
    "id": null,
    "metadata": {},
    "name": "SlugUser_ProfileQuery",
    "operationKind": "query",
    "text": "query SlugUser_ProfileQuery(\n  $slug: String!\n) {\n  user_connection(where: {slug: {_eq: $slug}}) {\n    edges {\n      node {\n        id\n        display\n        created_at\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '8b5d9b4ceaaa57e77a1252dba607fe11';
export default node;
