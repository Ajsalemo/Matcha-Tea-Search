// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export const client = new ApolloClient({
  uri: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/graphql',
  fetch,
  request: operation => {
    operation.setContext(context => ({
      headers: {
        ...context.headers,
        Authorization: `Bearer ${bearer_token}`,
        'Accept-Language': 'en_US'
      }
    }))
  }
});

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
