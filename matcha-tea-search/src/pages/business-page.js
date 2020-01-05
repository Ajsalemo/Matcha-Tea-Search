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
import HomeLinkIcon from "../components/homelinkicon"
import IsBusinessOpen from "../components/isbusinessopen"
import Reviews from "../components/reviews"
import SubmitForm from "../components/submitform"
import { todaysBusinessHours } from "../helpers/helpers"
import { BusinessRatingFormat, FlexCenterBaseGrid, PageBackground, WeekdayHoursFormat } from "../helpers/resusable-styles"
import Footer from "../components/footer"

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const SingularBusinessPageGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1280px) {
    padding-left: 1em;
  }
`

const BusinessPageItemGrid = styled(FlexCenterBaseGrid)`
  flex-direction: column;
  align-items: center;
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: end;
  }
`
// ---------------------------------------------------------------------------------- //

const BusinessPage = props => {
  if (!props.location.state) {
    navigate("/")
    return null
  }
  const data = props.location.state.data
  // ? Test the object for nested arrays before defining
  const isCurrentlyOpenBP = data.hours[0] ? data.hours[0].is_open_now : null
  const currentBusinessHoursBP = data.hours[0] ? data.hours[0].open : null
  // ? Test both nested objects for a value before defining it
  const handicapAccessibleBP =
    data.attributes && data.attributes.wheelchair_accessible
      ? data.attributes.wheelchair_accessible.value_code
      : null

  return (
    <PageBackground item>
      {/* // ? - This component is a responsive home icon */}
      <HomeLinkIcon />
      <SubmitForm />
      <BusinessPageItemGrid item md={12} lg={12}>
        <Grid item md={10} lg={5}>
          <BusinessImage src={data.photos[0]} alt={data.name} height={"auto"} />
        </Grid>
        <SingularBusinessPageGrid item md={10} lg={3}>
          <BusinessTitle>{data.name}</BusinessTitle>
          <IsBusinessOpen isBusinessOpen={isCurrentlyOpenBP ? 1 : 0} />
          <Grid item md={12} lg={12}>
            <BusinessAddress
              display_phone={data.display_phone}
              address1={data.location.address1}
              city={data.location.city}
              state={data.location.state}
              postal_code={data.location.postal_code}
              country={data.location.country}
            />
          </Grid>
          <WeekdayHoursFormat gutterBottom>
            {todaysBusinessHours(currentBusinessHoursBP)}
          </WeekdayHoursFormat>
          <Typography style={{ color: "#fff" }}>{data.price}</Typography>
          <AccessibleIcon handicapAccessible={handicapAccessibleBP ? 1 : 0} />
          <BusinessRatingFormat>
            Rating:{" "}
            {data.rating ? data.rating : "No one has rated this business yet"}
          </BusinessRatingFormat>
          <Grid item style={{ paddingTop: "4em" }} xs={10} sm={10} md={10}>
            {/* // * If the reviews array is populated, map over it and pass down the values to the 'Reviews' component to display the data */}
            {data.reviews && data.reviews !== null
              ? data.reviews.map((review, i) => (
                  <Reviews
                    image_url={review.user.image_url}
                    name={review.user.name}
                    reviewText={review.text}
                    rating={review.rating}
                    time_created={review.time_created}
                    key={review.id}
                  />
                ))
              : null}
          </Grid>
        </SingularBusinessPageGrid>
      </BusinessPageItemGrid>
      <Footer />
    </PageBackground>
  )
}

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default BusinessPage

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
