// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import React from "react"
import styled from "styled-components"
import { retrieveCurrentLocation } from "../helpers/helpers"

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const DirectionsText = styled.button`
  display: flex;
  justify-content: flex-end;
  color: #fff;
  align-items: center;
  background-color: inherit;
  border: 0px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
// ---------------------------------------------------------------------------------- //

const Directions = ({ lat, lng, children }) => (
  <DirectionsText onClick={() => retrieveCurrentLocation(lat, lng)}>
    {children}
  </DirectionsText>
)

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default Directions

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
