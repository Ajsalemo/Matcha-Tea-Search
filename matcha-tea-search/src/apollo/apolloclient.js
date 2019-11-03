// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import ApolloClient from 'apollo-boost';
 
// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export const client = new ApolloClient({
  uri: process.env.APOLLO_CLIENT_URI,
  fetch,
  request: operation => {
    operation.setContext(context => ({
      headers: {
        ...context.headers,
        Authorization: process.env.YELP_API_KEY,
        'Accept-Language': 'en_US'
      }
    }))
  }
});

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
