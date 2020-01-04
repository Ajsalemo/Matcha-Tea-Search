// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { Typography } from "@material-ui/core"
import React from "react"
import styled from "styled-components"

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const BusinessFont = styled(Typography)`
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
`

// ---------------------------------------------------------------------------------- //

const BusinessTitle = ({ children }) => <BusinessFont>{children}</BusinessFont>

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default BusinessTitle

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //