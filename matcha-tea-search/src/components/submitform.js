// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { InputAdornment, TextField, Button, CircularProgress } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { useApolloClient } from '@apollo/react-hooks';
import { LOCATION_SEARCH } from '../apollo/apolloqueries';

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

const StyledForm = styled(Form)`
    display: flex;
`;

// ---------------------------------------------------------------------------------- //

const SubmitForm = () => {
    const client = useApolloClient();
    return (
        <Formik
            initialValues={{ search: '' }}
            onSubmit={async (values, { setSubmitting }) => {
                // Yelp's search endpoint is a GET request
                // In turn the query method from the client was used instead of a mutation
                await client.query({
                    query: LOCATION_SEARCH,
                    variables: {
                        location: values.search
                    }
                })
                setSubmitting(false)
            }}
        >
            {({ values, handleChange, isSubmitting }) => (
                <StyledForm>
                    <TextfieldInput 
                        name='search'
                        id='search-for-location'
                        label='Search for locations'
                        placeholder='Ex. Charlotte, NC'
                        margin='normal'
                        variant='filled'
                        value={values.search}
                        onChange={handleChange}
                        InputProps={{
                            endAdornment: 
                            isSubmitting ? <CircularProgress /> 
                                :
                                <InputAdornment position='end'>
                                    <Button type='submit'>
                                        <SearchIcon/>
                                    </Button>
                                </InputAdornment>
                        }}
                    />
                </StyledForm>
            )}
        </Formik>
    );
}

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default SubmitForm;

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
