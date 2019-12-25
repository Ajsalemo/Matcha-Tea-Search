// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { Avatar, Typography, Grid } from "@material-ui/core"
import React from "react"
import styled from "styled-components"
import {
  BusinessRatingFormat,
  FlexDisplayColumn,
  FlexDisplayRow,
} from "../helpers/resusable-styles"
import BusinessImage from "../components/businessimage"
import moment from "moment"

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const ReviewersName = styled(Typography)`
  font-weight: bold;
  color: #fff;
  padding-left: 0.5em;
`

const ReviewGrid = styled(FlexDisplayRow)`
  padding: 2em 0em;
  border-bottom: 1px solid gray;
`

const SecondaryReviewText = styled(Typography)`
  padding: 0em 0em 0em 0.5em;
  font-size: 0.9em;
  color: ${props => props.timecreatedtext ? "#fff" : null}
`

// ---------------------------------------------------------------------------------- //

const Reviews = ({ image_url, name, reviewText, rating, time_created }) => (
  <ReviewGrid item>
    <Avatar>
        <BusinessImage src={image_url} alt={`${name}'s avatar`} />
    </Avatar>
    <FlexDisplayColumn>
      <ReviewersName variant="subtitle2">{name}</ReviewersName>
      <Grid>
        {rating >= 3 ? (
          <SecondaryReviewText color="primary">
            Rating: {rating}
          </SecondaryReviewText>
        ) : (
          <SecondaryReviewText color="error">
            Rating: {rating}
          </SecondaryReviewText>
        )}
      </Grid>
        <SecondaryReviewText timecreatedtext>{moment(time_created, "YYYY-MM-DD, hh:mm:ss a").format("MMMM Do YYYY, h:mm a")}</SecondaryReviewText>
      <BusinessRatingFormat>{reviewText}</BusinessRatingFormat>
    </FlexDisplayColumn>
  </ReviewGrid>
)

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default Reviews

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
