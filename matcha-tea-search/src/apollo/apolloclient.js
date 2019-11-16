// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import fetch from 'isomorphic-fetch';

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const cache = new InMemoryCache();

// ! - Since Window is not available in build time with Gatsby, this IIFE throws an error. 
// ! - This promise still persists queries, but need to find a better possible solution to avoid any thrown errors.
(async () => {
  await persistCache({
    cache,
    storage: typeof window !== 'undefined' && window.localStorage,
  }).catch(err => {
    console.log('Window was not available at build time')
    throw err;
  });
})().catch(err => console.log(err));

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
