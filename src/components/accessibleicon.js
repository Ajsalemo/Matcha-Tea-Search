// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import React from "react"
import { Accessible } from "@material-ui/icons"
import styled from "styled-components"
import { Grid } from "@material-ui/core"

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const AttributesDiv = styled(Grid)`
  display: flex;
  align-items: center;
  color: ${props => (props.handicapaccessible ? "#92a3ff" : "red")};
`

// ---------------------------------------------------------------------------------- //

const AccessibleIcon = ({ handicapAccessible }) =>
  // ? Let the user know whether or not this place of business is wheelchair accessible */}
  // ? If the 'attributes' array is empty, then display nothing - Yelp's API response returns 'true/false' as a string */}
  handicapAccessible === "true" ? (
    <AttributesDiv handicapaccessible={handicapAccessible ? 1 : 0}>
      <Accessible /> Accessible
    </AttributesDiv>
  ) : handicapAccessible === "false" ? (
    <AttributesDiv>
      <Accessible /> Not Accessible
    </AttributesDiv>
  ) : null

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default AccessibleIcon

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
