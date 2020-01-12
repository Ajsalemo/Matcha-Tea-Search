// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import React, { Fragment } from "react"
import styled from "styled-components"
import Hero from "../components/hero"
import SEO from "../components/SEO"
import { FlexCenterBaseGrid } from "../helpers/resusable-styles"

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const LandingGrid = styled(FlexCenterBaseGrid)`
  flex-direction: row;
  height: 100%;
`

const LandingGridContainer = styled(FlexCenterBaseGrid)`
  height: 100vh;
  flex-direction: column;
`

// ---------------------------------------------------------------------------------- //

const Landing = () => {
  return (
    <Fragment>
      <SEO 
        title="Matcha finder"
        description="Search for local Matcha"
        pathname="/"
        lang="en"
      />
      <LandingGridContainer container>
        <StaticQuery
          query={headerImageQuery}
          render={data => {
            const backgroundImage = data.file.childImageSharp.fluid
            return (
              <BackgroundImage
                fluid={backgroundImage}
                style={{ width: "100%", height: "100%" }}
              >
                <LandingGrid>
                  <Hero />
                </LandingGrid>
              </BackgroundImage>
            )
          }}
        />
      </LandingGridContainer>
    </Fragment>
  )
}

// ---------------------------------------------------------------------------------- //
// ? This query loads the background image on the landing page with 'gatsby-background-image'
export const headerImageQuery = graphql`
  query {
    file(relativePath: { eq: "matcha-background-image.jpg" }) {
      childImageSharp {
        fluid(quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default Landing

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
