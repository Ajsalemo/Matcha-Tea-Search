// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { Grid, Typography } from "@material-ui/core"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import BusinessImage from "../components/businessimage"
import MatchaIcon from "../images/matcha_icon.png"

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

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

const HomeLinkIcon = () => (
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
)

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default HomeLinkIcon

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
