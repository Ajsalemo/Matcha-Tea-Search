// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { Grid, Typography } from "@material-ui/core"
import { Satellite } from "@material-ui/icons"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import BusinessAddress from "../components/businessaddress"
import { todaysBusinessHours } from "../helpers/helpers"
import {
  BusinessRatingFormat,
  FlexDisplayColumn,
  WeekdayHoursFormat,
} from "../helpers/resusable-styles"
import AccessibleIcon from "./accessibleicon"
import BusinessImage from "./businessimage"
import BusinessTitle from "./businesstitle"
import Directions from "./directions"
import IsBusinessOpen from "./isbusinessopen"

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const BusinessGrid = styled(Grid)`
  display: flex;
  justify-content: space-between;
  border: 1px solid #fff;
  border-radius: 1em;
  padding: 0.7em;
`
const ImageAndDescriptionsGrid = styled(FlexDisplayColumn)`
  @media (min-width: 600px) {
    flex-direction: row;
  }
`
const NestedBusinessGrid = styled(FlexDisplayColumn)`
  padding-left: 0.4em;
`
const DirectionsGrid = styled(FlexDisplayColumn)`
  justify-content: space-between;
`
const BusinessPageLink = styled(Link)`
  color: #92a3ff;
  padding-left: 0.4em;
`

// ---------------------------------------------------------------------------------- //

const BusinessDisplay = ({ data }) => {
  return data.map((business, i) => {
    // ? Test the object for nested arrays before defining
    const isBusinessOpen = business.hours[0]
      ? business.hours[0].is_open_now
      : null
    const currentBusinessHours = business.hours[0]
      ? business.hours[0].open
      : null
    const reviewExcerpt = business.reviews.length
      ? business.reviews[0].text
      : null
    // ? Test both nested objects for a value before defining it
    const handicapAccessible =
      business.attributes && business.attributes.wheelchair_accessible
        ? business.attributes.wheelchair_accessible.value_code
        : null
    return (
      <BusinessGrid item sm={12} md={12} lg={12} key={business.alias}>
        <ImageAndDescriptionsGrid item xs={10} sm={12} lg={10}>
          <Grid item xs={10} sm={10} lg={6}>
            <Link to="/business-page/" state={{ data: business }}>
              <BusinessImage
                src={business.photos[0]}
                alt={business.name}
                key={business.id}
                height={"100%"}
              />
            </Link>
          </Grid>
          <NestedBusinessGrid item xs={12} sm={12} lg={6}>
            {/* // ? - 'i + 1' is used as a numbered list, started from 1 - these numbers are also displayed on Google Maps to associate the businesses with the displayed markers */}
            <BusinessTitle variant="h2">
              {i + 1}. {business.name}
            </BusinessTitle>
            <IsBusinessOpen isBusinessOpen={isBusinessOpen ? 1 : 0} />
            {/* // ? This component displays the business hours for the week */}
            <WeekdayHoursFormat gutterBottom key={business.alias}>
              {todaysBusinessHours(currentBusinessHours)}
            </WeekdayHoursFormat>
            <Typography style={{ color: "#fff" }}>{business.price}</Typography>
            <AccessibleIcon handicapAccessible={handicapAccessible ? 1 : 0} />
            <BusinessRatingFormat>
              Rating:{" "}
              {business.rating
                ? business.rating
                : "No one has rated this business yet"}
            </BusinessRatingFormat>
            <BusinessRatingFormat>
              "{reviewExcerpt}"
              <BusinessPageLink to="/business-page/" state={{ data: business }}>
                more
              </BusinessPageLink>
            </BusinessRatingFormat>
          </NestedBusinessGrid>
        </ImageAndDescriptionsGrid>
        <DirectionsGrid item xs={4} sm={2} lg={4}>
          <BusinessAddress
            display_phone={business.display_phone}
            address1={business.location.address1}
            city={business.location.city}
            state={business.location.state}
            postal_code={business.location.postal_code}
            country={business.location.country}
            businessdisplay
          />
          {/* // * This component consists of Google's Maps URL - depending on the device being used, this will pop open the Maps application if it's installed on the users device
              // * If it isn't, it will open itself in the browser. Both implementations will give directions, the actual Maps application will give turn-by-turn directions
          */}
          <Directions
            lat={business.coordinates.latitude}
            lng={business.coordinates.longitude}
          >
            Directions <Satellite style={{ color: "#92a3ff" }} />
          </Directions>
        </DirectionsGrid>
      </BusinessGrid>
    )
  })
}

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default BusinessDisplay

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
