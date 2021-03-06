// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { Grid } from "@material-ui/core"
import { navigate } from "gatsby"
import React, { Fragment } from "react"
import styled from "styled-components"
import BusinessDisplay from "../components/businessdisplay"
import Footer from "../components/footer"
import GoogleMapContainer from "../components/googlemaps"
import HomeLinkIcon from "../components/homelinkicon"
import SubmitForm from "../components/submitform"
import { FlexCenterBaseGrid, PageBackground } from "../helpers/resusable-styles"
import SEO from "../components/SEO"

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const SearchResultsGrid = styled(FlexCenterBaseGrid)`
  flex-direction: column;
  align-items: center;
  @media (min-width: 1260px) {
    padding-left: 1em;
  }
`
// ---------------------------------------------------------------------------------- //

const SearchResults = props => {
  // * If someone tries to manually type this route without state or data
  // * Push them back to the homepage - return null since nothing will be rendered
  if (!props.location.state) {
    navigate("/")
    return null
  }
  const data = props.location.state.data.data.search.business
  return (
    <Fragment>
      <SEO 
        title="Matcha Search Results"
        description="Nearby local Matcha businesses"
        pathname="/search-results"
        lang="en"
      />
      <PageBackground item>
        {/* // ? - This component is a responsive home icon */}
        <HomeLinkIcon />
        <SubmitForm />
        <FlexCenterBaseGrid container>
          <SearchResultsGrid item lg={6} md={11} sm={11} xs={11}>
            <BusinessDisplay data={data} />
          </SearchResultsGrid>
          <Grid item lg={6} md={11} sm={11} xs={11}>
            <GoogleMapContainer data={data} />
          </Grid>
        </FlexCenterBaseGrid>
        <Footer />
      </PageBackground>
    </Fragment>
  )
}

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default SearchResults

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
