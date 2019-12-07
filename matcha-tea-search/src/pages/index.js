// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { Grid } from '@material-ui/core';
import { StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import styled from 'styled-components';
import { headerImageQuery } from '../apollo/apolloqueries';
import Hero from '../components/hero';

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const LandingGrid = styled(Grid)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100%;
`;

const LandingGridContainer = styled(Grid)`
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

// ---------------------------------------------------------------------------------- //

const Landing = () => {
    return (
        <LandingGridContainer container>
            <StaticQuery
                query={headerImageQuery}
                render={data => {
                    const backgroundImage = data.file.childImageSharp.fluid
                    return (
                        <BackgroundImage
                            fluid={backgroundImage}
                            style={{ width: '100%', height: '100%' }}
                        >
                            <LandingGrid>
                                <Hero />
                            </LandingGrid>
                        </BackgroundImage>
                    );
                }}
            />
        </LandingGridContainer>
    );
}

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default Landing;

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

