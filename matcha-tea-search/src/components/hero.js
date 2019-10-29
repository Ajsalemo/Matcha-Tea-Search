// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import SubmitForm from './submitform';

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const HeroTypography = styled(Typography)`
    color: #fff;
    margin-top: 0.8em;
    width: fit-content;
    margin: 0 auto;
    font-family: Josefin Sans, Arial, sans-serif;
    background-color: #008000c2;
    padding: 0.2em 0.3em 0em 0.3em;
    text-align: center;
`;

const HeroGrid = styled(Grid)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 3.5em;
`;

// ---------------------------------------------------------------------------------- //

const Hero = () => {
    return (
        <HeroGrid item sm={12} md={10}>
            <HeroTypography variant="h1">Matcha Finder</HeroTypography>
            <HeroTypography variant="subtitle1">Search for local Matcha</HeroTypography>
            <SubmitForm />
        </HeroGrid>
    );
}

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default Hero;

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
