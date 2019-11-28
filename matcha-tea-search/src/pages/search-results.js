// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import React from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import SubmitForm from '../components/submitform';

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const SearchReultsPage = styled(Grid)`
    background-color: #000000de;
    height: 100vh;
`;

// ---------------------------------------------------------------------------------- //

const SearchResults = props => {
    // * If someone tries to manually type this route without state or data
    // * Push them back to the homepage - return null since nothing will be rendered 
    if(!props.location.state) {
        navigate('/')
        return null;
    } 
    return (
        <SearchReultsPage item>
            <SubmitForm />
            <Grid container>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                    DIV
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                    DIV
                </Grid>
            </Grid>
        </SearchReultsPage>
    );
}

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default SearchResults;

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
