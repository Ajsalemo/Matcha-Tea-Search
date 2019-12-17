// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { Grid, Typography } from "@material-ui/core"
import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import styled from "styled-components"

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const ToolTipGrid = styled(Grid)`
  display: flex;
  flex-direction: row;
`

const ImageToolTipGrid = styled(Grid)`
  display: flex;
  justify-content: center;
`

const AddressToolTipGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  padding-left: 0.3em;
`

const AddressParagraphTag = styled.p`
  margin: 0em;
`

// ---------------------------------------------------------------------------------- //

const MapToolTip = ({
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
  <Grid item>
    <Typography variant="subtitle2">
      {numberInList + 1}. {businessName}
    </Typography>
    <ToolTipGrid item>
      <ImageToolTipGrid item>
        <LazyLoadImage
          src={businessPhoto}
          alt={businessName}
          height="200"
          effect="blur"
        />
      </ImageToolTipGrid>
      <AddressToolTipGrid item>
        <AddressParagraphTag>{businessPhone}</AddressParagraphTag>
        <AddressParagraphTag>{businessAdress1}</AddressParagraphTag>
        <AddressParagraphTag>
          {businessCity}, {businessState}
        </AddressParagraphTag>
        <AddressParagraphTag>
          {businessPostalCode}, {businessCountry}
        </AddressParagraphTag>
      </AddressToolTipGrid>
    </ToolTipGrid>
  </Grid>
)

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default MapToolTip

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
