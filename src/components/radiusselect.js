// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { Grid, InputLabel, MenuItem, Select } from "@material-ui/core"
import React from "react"
import styled from "styled-components"

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const StypedInputLabel = styled(InputLabel)`
  font-size: 0.7em;
  color: #000;
`

const ParentRadiusGrid = styled(Grid)`
  border-right: 1px solid #000;
  border-left: 1px solid #000;
  padding: 0em 0.3em;
`

// ---------------------------------------------------------------------------------- //

const RadiusSelect = ({ radius, handleChange }) => (
  <ParentRadiusGrid>
    <StypedInputLabel id="radius-select">Radius(Mi.)</StypedInputLabel>
    <Select
      id="radius-select-value"
      name="radius"
      value={radius}
      onChange={handleChange}
    >
      {/* 
        // * Yelp's API defines their radius in meters 
        // * These values have been converted from Miles to Meters
      */}
      <MenuItem value={1610}>1</MenuItem>
      <MenuItem value={8047}>5</MenuItem>
      <MenuItem value={16094}>10</MenuItem>
      <MenuItem value={24141}>15</MenuItem>
      <MenuItem value={32187}>20</MenuItem>
      <MenuItem value={40000}>25</MenuItem>
    </Select>
  </ParentRadiusGrid>
)

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default RadiusSelect

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
