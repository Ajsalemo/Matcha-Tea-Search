// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export const client = new ApolloClient({
  uri: '/graphql',
  fetch,
  request: operation => {
    operation.setContext(context => ({
      headers: {
        ...context.headers,
        Authorization: 'Bearer OsETErBzpyetI6eZewoap7zlFpSP32576voj3-ZpZhb2ca7RbSm9Pkg0z_ymJe4coNIATmbI1LTBgaTExaVGX1M0W4EfmbovFQFbD3v5Ai506_Mg9r20h1gkOfK5XXYx',
        'Accept-Language': 'en_US'
      }
    }))
  }
});

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
