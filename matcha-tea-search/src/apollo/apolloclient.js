// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export const client = new ApolloClient({
  uri: 'https://api.yelp.com/v3/graphql',
  fetch,
  fetchOptions: {
    mode: 'no-cors',
  },
  request: operation => {
    operation.setContext(context => ({
      headers: {
        ...context.headers,
        Authorization: `Bearer ${process.env.YELP_API_KEY}`,
        "Content-Type": "application/graphql"
      }
    }))
  }
});

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
