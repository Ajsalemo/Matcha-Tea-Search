// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { InputAdornment, TextField } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const TextfieldInput = styled(TextField)`
    width: 70%;
    margin: 7em auto 0em auto;
    background-color: #fff;
`;

const SearchIcon = styled(Search)`
    &:hover {
        cursor: pointer;
    }
`;

// ---------------------------------------------------------------------------------- //

const SubmitForm = () => {
    const { loading, error, data } = useQuery(SUBMIT_SEARCH_QUERY);
    console.log(data);
    return (
        <TextfieldInput 
            id="search-for-location"
            label="Search for locations"
            placeholder="Ex. Charlotte, NC"
            margin="normal"
            variant="filled"
            InputProps={{
                endAdornment: <InputAdornment position='end'><SearchIcon /></InputAdornment>
            }}
        />
    );
}

const SUBMIT_SEARCH_QUERY = gql`
    query business {
        business(id: "garaje-san-francisco") {
            name
            id
            alias
            rating
            url
        }
    }`

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default SubmitForm;

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
