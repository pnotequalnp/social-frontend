import { withHydrateDatetime } from 'relay-nextjs/date';

export const fetchGraphQL = (f: any, token?: string) => async (params: any, variables: any) => {
  const headers: any = {
    'Content-Type': 'application/json',
  };

  const admin = process.env.HASURA_ADMIN;

  if (admin) {
    console.log('GraphQL: Using admin secret');
    headers['x-hasura-admin-secret'] = admin;
  }

  if (token) {
    console.log(`GraphQL: Using cookie (${token})`)
    headers['Cookie'] = `auth=${token}`;
  }

  const response = await f(process.env.NEXT_PUBLIC_RELAY_ENDPOINT, {
    method: 'POST',
    credentials: 'include',
    headers,
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });

  const json = await response.text();
  return JSON.parse(json, withHydrateDatetime);
}
