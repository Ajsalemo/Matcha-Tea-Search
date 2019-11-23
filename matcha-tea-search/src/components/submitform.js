// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { useApolloClient } from '@apollo/react-hooks';
import { Button, CircularProgress, InputAdornment, TextField } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { ErrorMessage, Form, Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { LOCATION_SEARCH } from '../apollo/apolloqueries';
import LimitSelect from './limitselect';
import RadiusSelect from './radiusselect';

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const TextfieldInput = styled(TextField)`
    width: 90%;
    margin: 7em 0em 0em 0em;
    background-color: #fff;
`;

const SearchIcon = styled(Search)`
    &:hover {
        cursor: pointer;
    }
`;

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SubmitButton = styled(Button)`
    min-width: 0em;
`;

const ErrorDiv = styled.div`
    background-color: #fff;
    padding: 0em 1.5em;
    font-weight: bold;
    color: red;
    border: 1px solid red;
`;

// ---------------------------------------------------------------------------------- //

const SubmitFormValidationSchema = Yup.object().shape({
    search: Yup.string()
        .min(2, 'The value you have entered is too short')
        .max(65, 'The value you have entered is too long')
        .required('Required')
});

// ---------------------------------------------------------------------------------- //

const SubmitForm = () => {
    const client = useApolloClient();
    return (
        <Formik
            initialValues={{ search: '', radius: 40000, results: 5 }}
            validationSchema={SubmitFormValidationSchema}
            onSubmit={async (values, { setSubmitting, setErrors }) => {
                // Yelp's search endpoint is a GET request
                // In turn the query method from the client was used instead of a mutation
                await client.query({
                    query: LOCATION_SEARCH,
                    variables: {
                        location: values.search,
                        radius: values.radius,
                        limit: values.results
                    }
                }).catch(err => {
                    // * Sets the returned error to the 'search' field
                    setErrors({ search: err.message })
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
                                <LimitSelect 
                                    results={values.results}
                                    handleChange={handleChange}
                                />
                                <RadiusSelect 
                                    // * Yelp's API defines their radius in meters 
                                    radius={values.radius}
                                    handleChange={handleChange}
                                />      
                                {isSubmitting ? <CircularProgress /> 
                                    :                    
                                <SubmitButton type='submit' disabled={isSubmitting}>
                                    <SearchIcon/>
                                </SubmitButton>}
                            </InputAdornment>
                        }}
                    />
                    {/* // * Formik's error state can be accessed through the callback in this component */}
                    <ErrorMessage name='search'>{err => <ErrorDiv>{err}</ErrorDiv>}</ErrorMessage>
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
