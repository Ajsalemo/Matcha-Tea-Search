// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { Tooltip } from "@material-ui/core"
import React from "react"
import styled from "styled-components"
import BlueMapMarker from "../images/map-pin.png"
import MapToolTip from "./maptooltip"

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const MarkerComponent = styled.img`
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.2);
  }
`

// ---------------------------------------------------------------------------------- //

const MapMarker = ({
  lat,
  lng,
  numberInList,
  businessName,
  businessPhoto,
  businessPhone,
  businessAdress1,
  businessCity,
  businessPostalCode,
  businessState,
  businessCountry,
}) => (
  <Tooltip
    title={
      <MapToolTip
        numberInList={numberInList}
        businessName={businessName}
        businessPhoto={businessPhoto}
        businessPhone={businessPhone}
        businessAdress1={businessAdress1}
        businessCity={businessCity}
        businessPostalCode={businessPostalCode}
        businessState={businessState}
        businessCountry={businessCountry}
      />
    }
  >
    <MarkerComponent lat={lat} lng={lng} src={BlueMapMarker} alt="" />
  </Tooltip>
)

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default MapMarker

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
