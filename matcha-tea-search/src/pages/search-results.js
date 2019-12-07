// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { Grid } from '@material-ui/core';
import { navigate } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SubmitForm from '../components/submitform';
import BusinessDisplay from '../components/businessdisplay';

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const SearchResultsPage = styled(Grid)`
    background-color: #000000de;
`;

const SearchResultsGrid = styled(Grid)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

// ---------------------------------------------------------------------------------- //

const SearchResults = props => {
    const data = props.location.state.data.data.search.business;
    // * If someone tries to manually type this route without state or data
    // * Push them back to the homepage - return null since nothing will be rendered 
    if(!props.location.state) {
        navigate('/')
        return null;
    } 
    return (
        <SearchResultsPage item>
            <SubmitForm />
            <Grid container>
                <SearchResultsGrid item lg={6} md={6} sm={6} xs={12}>
                    <BusinessDisplay data={data} />
                </SearchResultsGrid>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                    DIV
                </Grid>
            </Grid>
        </SearchResultsPage>
    );
}

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default SearchResults;

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
