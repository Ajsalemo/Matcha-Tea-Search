// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { Typography } from "@material-ui/core"
import React from "react"

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const IsBusinessOpen = ({ isBusinessOpen }) =>
  /* // ? If the business is currently open(Open during business hours) then display either an open or closed message that's color coordinated */
  /* // ? If the 'hours' array is empty, then display nothing */
  isBusinessOpen ? (
    <Typography style={{ color: "#92a3ff" }}>Currently Open</Typography>
  ) : isBusinessOpen !== null && !isBusinessOpen ? (
    <Typography color="secondary">Currently Closed</Typography>
  ) : null

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default IsBusinessOpen

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
