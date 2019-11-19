// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { useApolloClient } from '@apollo/react-hooks';
import { Button, CircularProgress, InputAdornment, TextField } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { Form, Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';
import { LOCATION_SEARCH } from '../apollo/apolloqueries';
import RadiusSelect from './radiusselect';

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const TextfieldInput = styled(TextField)`
    width: 90%;
    margin-top: 7em;
    background-color: #fff;
`;

const SearchIcon = styled(Search)`
    &:hover {
        cursor: pointer;
    }
`;

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const SubmitButton = styled(Button)`
    min-width: 0em;
`;

// ---------------------------------------------------------------------------------- //

const SubmitForm = () => {
    const client = useApolloClient();
    return (
        <Formik
            initialValues={{ search: '', radius: 40000 }}
            onSubmit={async (values, { setSubmitting }) => {
                // Yelp's search endpoint is a GET request
                // In turn the query method from the client was used instead of a mutation
                await client.query({
                    query: LOCATION_SEARCH,
                    variables: {
                        location: values.search,
                        radius: values.radius
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
                            <InputAdornment position='end'>
                                {isSubmitting ? <CircularProgress /> 
                                    :                    
                                <SubmitButton type='submit' disabled={isSubmitting}>
                                    <SearchIcon/>
                                </SubmitButton>}
                                <RadiusSelect 
                                    // * Yelp's API defines their radius in meters 
                                    radius={values.radius}
                                    handleChange={handleChange}
                                />      
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
