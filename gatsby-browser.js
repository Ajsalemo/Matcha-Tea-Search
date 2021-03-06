// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import React from 'react';
import { ApolloProviderHOC } from './src/apollo/apolloclient';

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export const wrapRootElement = ({ element }) => <ApolloProviderHOC>{element}</ApolloProviderHOC>;

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
