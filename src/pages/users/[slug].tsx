import type { NextPageContext } from 'next';
import { withRelay, RelayProps } from 'relay-nextjs';
import { graphql, usePreloadedQuery } from 'react-relay/hooks';
import { getClientEnvironment } from '../../lib/client/relayEnv';
import { Layout } from '../../components/Layout'
import type { SlugUser_ProfileQuery } from '../../queries/__generated__/SlugUser_ProfileQuery.graphql'

const UserProfileQuery = graphql`
  query SlugUser_ProfileQuery($slug: String!) {
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
`;

function UserProfile({ preloadedQuery }: RelayProps<{}, SlugUser_ProfileQuery>) {
  const query = usePreloadedQuery(UserProfileQuery, preloadedQuery);
  const user = query.user_connection.edges[0].node;

  return <Layout title={user.display}>
    <h1>{user.display}</h1>
    <h5>{`Joined: ${user.created_at}`}</h5>
  </Layout>;
}

function Loading() {
  return <div>Loading...</div>;
}

export default withRelay(UserProfile, UserProfileQuery, {
  fallback: <Loading />,
  createClientEnvironment: () => getClientEnvironment()!,
  serverSideProps: async (ctx) => {
    const { getAuth } = await import('../../lib/server/auth');
    const auth = getAuth(ctx);
    return { auth };
  },
  createServerEnvironment: async (
    ctx: NextPageContext,
    { auth }: { auth: string }
  ) => {
    const { getServerEnvironment } = await import('lib/server/relayEnv');
    return getServerEnvironment(auth);
  },
});
