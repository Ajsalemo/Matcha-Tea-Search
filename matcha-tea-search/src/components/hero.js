// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { Grid, Typography, TextField } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const HeroTypography = styled(Typography)`
    color: #fff;
    margin-top: 0.8em;
    width: fit-content;
    margin: 0 auto;
    font-family: Josefin Sans, Arial, sans-serif;
    background-color: #008000c2;
    padding: 0.2em 0.1em 0em 0.1em;
    text-align: center;
`;

const HeroGrid = styled(Grid)`
    display: flex;
    flex-direction: column;
    padding-top: 3.5em;
`;

const TextfieldInput = styled(TextField)`
    width: 70%;
    margin: 7em auto 0em auto;
    background-color: #fff;
`;

// ---------------------------------------------------------------------------------- //

const Hero = () => {
    return (
        <HeroGrid item sm={10} md={10}>
            <HeroTypography variant="h1">Matcha Tea Search</HeroTypography>
            <HeroTypography variant="subtitle1">Search for local Matcha and Bubble tea</HeroTypography>
            <TextfieldInput 
                id="search-for-location"
                label="Search for locations"
                placeholder="Ex. Charlotte, NC"
                margin="normal"
                variant="filled"
            />
        </HeroGrid>
    );
}

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default Hero;

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
