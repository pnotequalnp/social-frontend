import type { NextPageContext } from 'next';
import Link from 'next/link'
import { withRelay, RelayProps } from 'relay-nextjs';
import { graphql, usePreloadedQuery } from 'react-relay/hooks';
import { getClientEnvironment } from '../../lib/client/relayEnv';
import { Layout } from '../../components/Layout'
import type { users_UsersQuery } from '../../queries/__generated__/users_UsersQuery.graphql'

const UsersQuery = graphql`
  query users_UsersQuery {
    user_connection {
      edges {
        node {
          display
          slug
        }
      }
    }
  }
`;

function UserProfile({ preloadedQuery }: RelayProps<{}, users_UsersQuery>) {
  const query = usePreloadedQuery(UsersQuery, preloadedQuery);

  const users = query.user_connection.edges.map((user: { node: { slug: string, display: string } }) =>
    <li key={user.node.slug}>
      <Link href={`/users/${user.node.slug}`}>
        <a>{user.node.display}</a>
      </Link>
    </li>
  );

  return <Layout title="Users">
    <ul>{users}</ul>
  </Layout>;
}

function Loading() {
  return <div>Loading...</div>;
}

export default withRelay(UserProfile, UsersQuery, {
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
