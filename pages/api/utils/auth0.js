import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
  domain: 'dev-wsqqjyot.us.auth0.com',
  clientId: 'RmmlquT2AlTZE9l51mcGX1W5fi1NIPDO',
  clientSecret: 'IXcKGCnZEKsS_PMxG3U9hXMdILTjf-VlilCNhaZGapRkYtGND4OWQWhkCfBCwh0b',
  scope: 'openid profile',
  redirectUri: 'http://localhost:3000/api/callback',
  postLogoutRedirectUri: 'http://localhost:3000/',
  session: {
    cookieSecret: 'kahlufsdjkllhglkjkhakhkaekllgglrwkaoy4uruaufytiruyoyhguryqoiuytoi45o',
    cookieLifetime: 60 * 60 * 8
  }
});