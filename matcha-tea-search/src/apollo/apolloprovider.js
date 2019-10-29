// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import { client } from './apolloclient';

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export const ApolloHOC = props => {
    const { children } = props;
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
}

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //