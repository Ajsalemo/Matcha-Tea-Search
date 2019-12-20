// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { Grid, Typography } from "@material-ui/core"
import { Link, navigate } from "gatsby"
import React from "react"
import styled from "styled-components"
import BusinessDisplay from "../components/businessdisplay"
import BusinessImage from "../components/businessimage"
import GoogleMapContainer from "../components/googlemaps"
import SubmitForm from "../components/submitform"
import MatchaIcon from "../images/matcha_icon.png"

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
  @media (min-width: 1260px) {
    padding-left: 1em;
  }
`

const HomeIconGrid = styled(Grid)`
  display: flex;
  padding-top: 0.5em;
  @media (min-width: 1280px) {
    display: none;
  }
`

const HomeIconNavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding-left: 0.3em;
  display: flex;
  flex-direction: row;
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
      <Grid container style={{ justifyContent: "center" }}>
        <HomeIconGrid item xs={11} sm={11} md={11}>
          <Typography>
            <HomeIconNavLink to="/">
              <BusinessImage src={MatchaIcon} alt="" />
              Home
            </HomeIconNavLink>
          </Typography>
        </HomeIconGrid>
      </Grid>
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
