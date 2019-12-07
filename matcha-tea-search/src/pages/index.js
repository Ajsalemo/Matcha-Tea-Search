// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { Grid } from '@material-ui/core';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import styled from 'styled-components';
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
// ? This query loads the background image on the landing page with 'gatsby-background-image'
export const headerImageQuery = graphql`
    query {
        file(relativePath: { eq: "matcha-background-image.jpg" }) {
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default Landing;

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

