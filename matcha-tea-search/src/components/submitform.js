// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { InputAdornment, TextField, Button } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';

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
    return (
        <Formik
                initialValues={{ search: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values.search);
                    setSubmitting(false);
                }}
            >
            {({ values, handleChange }) => (
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
