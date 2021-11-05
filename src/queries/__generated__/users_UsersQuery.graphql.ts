/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type users_UsersQueryVariables = {};
export type users_UsersQueryResponse = {
    readonly user_connection: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly display: string | null;
                readonly slug: string;
            };
        }>;
    };
};
export type users_UsersQuery = {
    readonly response: users_UsersQueryResponse;
    readonly variables: users_UsersQueryVariables;
};



/*
query users_UsersQuery {
  user_connection {
    edges {
      node {
        display
        slug
        id
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "display",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "users_UsersQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
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
                  (v0/*: any*/),
                  (v1/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "users_UsersQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
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
                  (v0/*: any*/),
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
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
    ]
  },
  "params": {
    "cacheID": "f203a048b9bbd236b1935f6b5df6f435",
    "id": null,
    "metadata": {},
    "name": "users_UsersQuery",
    "operationKind": "query",
    "text": "query users_UsersQuery {\n  user_connection {\n    edges {\n      node {\n        display\n        slug\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '39cb530dc71e616acd56cc2ea654831c';
export default node;
