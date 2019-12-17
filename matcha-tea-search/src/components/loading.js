// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { CircularProgress, Grid, Typography } from "@material-ui/core"
import React from "react"
import styled from "styled-components"

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const LoadingGridContainer = styled(Grid)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
`

// ! - Need a way to get rid of these important flags
const LoadingIndicator = styled(CircularProgress)`
  color: #000 !important;
  width: 60px !important;
  height: 60px !important;
`

// ! - Need a way to get rid of these important flags
const LoadingText = styled(Typography)`
  font-family: Josefin Sans, Arial, sans-serif !important;
  padding-left: 0.5em;
`

// ---------------------------------------------------------------------------------- //

const Loading = () => (
  <LoadingGridContainer container>
    <LoadingIndicator /> <LoadingText variant="h6">Loading..</LoadingText>
  </LoadingGridContainer>
)

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default Loading

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
