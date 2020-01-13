// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { ApolloProvider } from "@apollo/react-hooks"
import ApolloClient from "apollo-boost"
import { InMemoryCache } from "apollo-cache-inmemory"
import { persistCache } from "apollo-cache-persist"
import fetch from "isomorphic-fetch"
import React, { useEffect, useState } from "react"
import Loading from "../components/loading"

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

// Higher Order Function which accepts children - in this case this would be the 'rootElement' in gatsby-browser.js
// This function lets persistCache run in the window, by letting window load before persistCache starts to run
export const ApolloProviderHOC = props => {
  const { children } = props
  // Set state
  const [client, setClient] = useState(undefined)
  useEffect(() => {
    // Set a new instance of the cache
    const cache = new InMemoryCache()
    // Instantiate the client
    const client = new ApolloClient({
      cache,
      uri: process.env.GATSBY_APOLLO_CLIENT_URI,
      fetch,
      request: operation => {
        operation.setContext(context => ({
          headers: {
            ...context.headers,
            Authorization: `Bearer ${process.env.GATSBY_YELP_API_KEY}`,
            "Accept-Language": "en_US",
          },
        }))
      },
    })
    // Persist cache - between loads or hard refreshes, this prevents query or mutation data from disappearing the cache
    persistCache({
      cache,
      // Local storage is used as the storage provider
      storage: window.localStorage,
    }).then(() => {
      // Hook that accepts the client as state
      setClient(client)
    })
    return () => {}
  }, [])

  // If the client hasn't loaded yet then display the loading indicator
  if (client === undefined) return <Loading />
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
