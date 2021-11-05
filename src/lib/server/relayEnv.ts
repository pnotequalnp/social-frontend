import { graphql } from 'graphql';
import { withHydrateDatetime } from 'relay-nextjs/date';
import { GraphQLResponse, Environment, Network, Store, RecordSource } from 'relay-runtime';
import { fetchGraphQL } from '../graphql';
import fetch from 'node-fetch';

export function getServerEnvironment(auth?: string) {
  return new Environment({
    network: Network.create(fetchGraphQL(fetch, auth)),
    store: new Store(new RecordSource()),
    isServer: true,
  });
}
