// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { Grid, Typography } from "@material-ui/core"
import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import styled from "styled-components"
import { FlexCenterBaseGrid, FlexDisplayColumn, FlexDisplayRow } from "../helpers/resusable-styles"

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const AddressToolTipGrid = styled(FlexDisplayColumn)`
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
  <Grid container>
    <Typography variant="subtitle2">
      {numberInList + 1}. {businessName}
    </Typography>
    <FlexDisplayRow container>
      <FlexCenterBaseGrid item>
        <LazyLoadImage
          src={businessPhoto}
          alt={businessName}
          height="200"
          effect="blur"
        />
      </FlexCenterBaseGrid>
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
    </FlexDisplayRow>
  </Grid>
)

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default MapToolTip

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
