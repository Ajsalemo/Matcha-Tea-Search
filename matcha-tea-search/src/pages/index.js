// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { Grid } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import Hero from '../components/hero';
import MatchaMainBackground from '../images/matcha-main-background.jpg';

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const LandingGridContainer = styled(Grid)`
    background: url(${MatchaMainBackground}) center no-repeat;
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

const LandingGrid = styled(Grid)`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

// ---------------------------------------------------------------------------------- //

const Landing = () => {
    return (
        <LandingGridContainer container>
            <LandingGrid item md={12}>
                <Hero />
            </LandingGrid>
        </LandingGridContainer>
    );
}

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default Landing;

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

