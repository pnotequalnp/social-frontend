/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SlugUser_ProfileQueryVariables = {
    slug: string;
};
export type SlugUser_ProfileQueryResponse = {
    readonly user_connection: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly uuid: string;
                readonly display: string | null;
                readonly created_at: unknown;
                readonly text_posts: ReadonlyArray<{
                    readonly uuid: string;
                    readonly " $fragmentRefs": FragmentRefs<"TextPost_text_post">;
                }>;
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
        uuid
        display
        created_at
        text_posts {
          uuid
          ...TextPost_text_post
          id
        }
        id
      }
    }
  }
}

fragment TextPost_text_post on text_post {
  uuid
  content
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "uuid",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "display",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created_at",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SlugUser_ProfileQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "text_post",
                    "kind": "LinkedField",
                    "name": "text_posts",
                    "plural": true,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "TextPost_text_post"
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
        ],
        "storageKey": null
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SlugUser_ProfileQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "text_post",
                    "kind": "LinkedField",
                    "name": "text_posts",
                    "plural": true,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "content",
                        "storageKey": null
                      },
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v5/*: any*/)
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
    "cacheID": "db616afb46eecbfc0052312bfd6befa6",
    "id": null,
    "metadata": {},
    "name": "SlugUser_ProfileQuery",
    "operationKind": "query",
    "text": "query SlugUser_ProfileQuery(\n  $slug: String!\n) {\n  user_connection(where: {slug: {_eq: $slug}}) {\n    edges {\n      node {\n        uuid\n        display\n        created_at\n        text_posts {\n          uuid\n          ...TextPost_text_post\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment TextPost_text_post on text_post {\n  uuid\n  content\n}\n"
  }
};
})();
(node as any).hash = '052f84a1aac1e4a7c13e41672a93cee2';
export default node;
