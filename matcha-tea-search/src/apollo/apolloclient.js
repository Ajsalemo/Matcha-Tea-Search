// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import fetch from 'isomorphic-fetch';

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const cache = new InMemoryCache();

const persistData = () => {
  persistCache({
    cache,
    storage: typeof window !== 'undefined' && window.localStorage,
  });
}

try {
  persistData()
} catch(err) {
  console.log(err)
}

// ---------------------------------------------------------------------------------- //

export const client = new ApolloClient({
  cache,
  uri: process.env.APOLLO_CLIENT_URI,
  fetch,
  request: operation => {
    operation.setContext(context => ({
      headers: {
        ...context.headers,
        Authorization: `Bearer ${process.env.YELP_ALP_KEY}`,
        'Accept-Language': 'en_US'
      }
    }))
  }
});

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
