import type { NextPageContext } from 'next';

export function getAuth(ctx: NextPageContext) {
  const { req } = ctx;

  const cookies = req?.headers['cookie']
    .split(';')
    .map(c => c.split('=').map(s => decodeURIComponent(s.trim())))
    .reduce((cs, c) => {
      cs[c[0]] = c[1];
      return cs;
    });

  return cookies['auth'];
}
