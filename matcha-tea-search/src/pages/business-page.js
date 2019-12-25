// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { Grid, Typography } from "@material-ui/core"
import { navigate } from "gatsby"
import React from "react"
import styled from "styled-components"
import AccessibleIcon from "../components/accessibleicon"
import BusinessAddress from "../components/businessaddress"
import BusinessImage from "../components/businessimage"
import BusinessTitle from "../components/businesstitle"
import IsBusinessOpen from "../components/isbusinessopen"
import Reviews from "../components/reviews"
import SubmitForm from "../components/submitform"
import { todaysBusinessHours } from "../helpers/helpers"
import {
  FlexCenterBaseGrid,
  PageBackground,
  WeekdayHoursFormat,
  BusinessRatingFormat,
} from "../helpers/resusable-styles"

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const SingularBusinessPageGrid = styled(Grid)`
  @media (min-width: 1280px) {
    padding-left: 1em;
  }
`

// ---------------------------------------------------------------------------------- //

const BusinessPage = props => {
  if (!props.location.state) {
    navigate("/")
    return null
  }
  const data = props.location.state.data
  console.log(data)
  // ? Test the object for nested arrays before defining
  const isCurrentlyOpenBP = data.hours[0] ? data.hours[0].is_open_now : null
  const currentBusinessHoursBP = data.hours[0] ? data.hours[0].open : null
  // ? Test both nested objects for a value before defining it
  const handicapAccessibleBP =
    data.attributes && data.attributes.wheelchair_accessible
      ? data.attributes.wheelchair_accessible.value_code
      : null

  return (
    <PageBackground container>
      <SubmitForm />
      <FlexCenterBaseGrid item lg={12}>
        <Grid item lg={5}>
          <BusinessImage src={data.photos[0]} alt={data.name} height={"auto"} />
        </Grid>
        <SingularBusinessPageGrid item lg={3}>
          <BusinessTitle>{data.name}</BusinessTitle>
          <IsBusinessOpen isBusinessOpen={isCurrentlyOpenBP} />
          <WeekdayHoursFormat gutterBottom>
            {todaysBusinessHours(currentBusinessHoursBP)}
          </WeekdayHoursFormat>
          <Typography style={{ color: "#fff" }}>{data.price}</Typography>
          <AccessibleIcon handicapAccessible={handicapAccessibleBP} />
          <BusinessRatingFormat>
            Rating:{" "}
            {data.rating ? data.rating : "No one has rated this business yet"}
          </BusinessRatingFormat>
          <Grid item style={{ paddingTop: '4em' }}>
            {/* // * If the reviews array is populated, map over it and pass down the values to the 'Reviews' component to display the data */}
            {data.reviews && data.reviews !== null
              ? data.reviews.map((review, i) => (
                  <Reviews
                    image_url={review.user.image_url}
                    name={review.user.name}
                    reviewText={review.text}
                    rating={review.rating}
                    key={review.id}
                  />
                ))
              : null}
          </Grid>
        </SingularBusinessPageGrid>
        <Grid item lg={2}>
          <BusinessAddress
            display_phone={data.display_phone}
            address1={data.location.address1}
            city={data.location.city}
            state={data.location.state}
            postal_code={data.location.postal_code}
            country={data.location.country}
          />
        </Grid>
      </FlexCenterBaseGrid>
    </PageBackground>
  )
}

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default BusinessPage

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
