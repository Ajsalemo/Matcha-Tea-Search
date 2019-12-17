// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { Grid } from "@material-ui/core"
import { navigate } from "gatsby"
import React from "react"
import styled from "styled-components"
import BusinessDisplay from "../components/businessdisplay"
import GoogleMapContainer from "../components/googlemaps"
import SubmitForm from "../components/submitform"

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const SearchResultsPage = styled(Grid)`
  background-color: #000000de;
`

const SearchResultsContainer = styled(Grid)`
  display: flex;
  justify-content: center;
`

const SearchResultsGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
    <SearchResultsPage item>
      <SubmitForm />
      <SearchResultsContainer container>
        <SearchResultsGrid item lg={6} md={11} sm={11} xs={11}>
          <BusinessDisplay data={data} />
        </SearchResultsGrid>
        <Grid item lg={6} md={11} sm={11} xs={11}>
          <GoogleMapContainer data={data} />
        </Grid>
      </SearchResultsContainer>
    </SearchResultsPage>
  )
}

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default SearchResults

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
