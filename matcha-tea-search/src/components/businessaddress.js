// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { Typography } from "@material-ui/core"
import React from "react"
import styled from "styled-components"
import { FlexDisplayColumn } from "../helpers/resusable-styles"

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const BusinessAddressGrid = styled(FlexDisplayColumn)`
  align-items: ${props => props.businessdisplay ? "flex-end" : "flex-start"};
`

const BusinessContactInfo = styled(Typography)`
  color: #92a3ff;
  font-size: 0.9em;
`

// ---------------------------------------------------------------------------------- //

const BusinessAddress = ({
  display_phone,
  address1,
  city,
  state,
  postal_code,
  country,
  businessdisplay
}) => (
  <BusinessAddressGrid businessdisplay={businessdisplay}>
    <BusinessContactInfo variant="subtitle1">
      {display_phone}
    </BusinessContactInfo>
    <BusinessContactInfo variant="subtitle1">{address1}</BusinessContactInfo>
    <BusinessContactInfo variant="subtitle1">
      {city}, {state}
    </BusinessContactInfo>
    <BusinessContactInfo variant="subtitle1">
      {country} - {postal_code}
    </BusinessContactInfo>
  </BusinessAddressGrid>
)

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default BusinessAddress

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
