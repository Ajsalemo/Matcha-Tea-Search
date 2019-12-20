// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { Grid, Typography } from "@material-ui/core"
import { Accessible } from "@material-ui/icons"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { todaysBusinessHours } from "../helpers/helpers"
import BusinessImage from "./businessimage"

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const BusinessFont = styled(Typography)`
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
`

const BusinessGrid = styled(Grid)`
  display: flex;
  justify-content: space-between;
  border: 1px solid #fff;
  border-radius: 1em;
  padding: 0.7em;
`

const ImageAndDescriptionsGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`

const BusinessContactInfo = styled(Typography)`
  color: #92a3ff;
  font-size: 0.9em;
`

const BusinessRating = styled(BusinessContactInfo)`
  color: #fff;
  padding-top: 2em;
`

const NestedBusinessGrid = styled(Grid)`
  display: flex;
  padding-left: 0.4em;
  flex-direction: column;
`

const BusinessAddressGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const AttributesDiv = styled(Grid)`
  display: flex;
  align-items: center;
  color: ${props => (props.handicapaccessible ? "#92a3ff" : "red")};
`

const DailyBusinessHours = styled(Typography)`
  color: #fff;
  font-size: 0.9em;
  display: flex;
  flex-direction: column;
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
            <BusinessImage
              src={business.photos[0]}
              alt={business.name}
              key={business.id}
              height={320}
            />
          </Grid>
          <NestedBusinessGrid item xs={12} sm={12} lg={6}>
            {/* // ? - 'i + 1' is used as a numbered list, started from 1 - these numbers are also displayed on Google Maps to associate the businesses with the displayed markers */}
            <BusinessFont variant="h2">
              {i + 1}. {business.name}
            </BusinessFont>
            {/* // ? If the business is currently open(Open during business hours) then display either an open or closed message that's color coordinated */}
            {/* // ? If the 'hours' array is empty, then display nothing */}
            {isBusinessOpen ? (
              <Typography style={{ color: "#92a3ff" }}>
                Currently Open
              </Typography>
            ) : isBusinessOpen !== null && !isBusinessOpen ? (
              <Typography color="secondary">Currently Closed</Typography>
            ) : null}
            {/* // ? This component displays the business hours for the week */}
            <DailyBusinessHours gutterBottom key={business.alias}>
              {todaysBusinessHours(currentBusinessHours)}
            </DailyBusinessHours>
            <Typography style={{ color: "#fff" }}>{business.price}</Typography>
            {/* // ? Let the user know whether or not this place of business is wheelchair accessible */}
            {/* // ? If the 'attributes' array is empty, then display nothing - Yelp's API response returns 'true/false' as a string */}
            {handicapAccessible === "true" ? (
              <AttributesDiv handicapaccessible={handicapAccessible}>
                <Accessible /> Accessible
              </AttributesDiv>
            ) : handicapAccessible === "false" ? (
              <AttributesDiv>
                <Accessible /> Not Accessible
              </AttributesDiv>
            ) : null}
            <BusinessRating>
              Rating:{" "}
              {business.rating
                ? business.rating
                : "No one has rated this business yet"}
            </BusinessRating>
            <BusinessRating>
              "{reviewExcerpt}"
              <Link to="#" style={{ paddingLeft: "0.4em" }}>
                more
              </Link>
            </BusinessRating>
          </NestedBusinessGrid>
        </ImageAndDescriptionsGrid>
        <BusinessAddressGrid item xs={4} sm={2} lg={4}>
          <BusinessContactInfo variant="subtitle1">
            {business.display_phone}
          </BusinessContactInfo>
          <BusinessContactInfo variant="subtitle1">
            {business.location.address1}
          </BusinessContactInfo>
          <BusinessContactInfo variant="subtitle1">
            {business.location.city}, {business.location.state}
          </BusinessContactInfo>
          <BusinessContactInfo variant="subtitle1">
            {business.location.postal_code}, {business.location.country}
          </BusinessContactInfo>
        </BusinessAddressGrid>
      </BusinessGrid>
    )
  })
}

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default BusinessDisplay

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
