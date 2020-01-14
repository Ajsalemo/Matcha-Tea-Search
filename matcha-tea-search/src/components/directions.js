// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import React, { useEffect, useState } from "react"
import styled from "styled-components"

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const DirectionsText = styled.a`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #fff;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
// ---------------------------------------------------------------------------------- //

const Directions = ({ lat, lng, children }) => {
  const [usersLat, setUsersLat] = useState(null)
  const [usersLng, setUsersLng] = useState(null)
  // * If user accepts their location being tracked, concatenate the coordinates into a usuable string for the Maps URL
  // * If the user doesn't accept the location tracking prompt - do not pass anything into the origin paramter - the user can still definte their location manually in the Google Maps window that will popup
  const concatenateCoordinates = usersLat && usersLng ? `${usersLat},${usersLng}` : ""
  useEffect(() => {
    const convertToMapURI = position => {
      if (position.coords) {
        setUsersLat(position.coords.latitude)
        setUsersLng(position.coords.longitude)
      }
    }

    // * If geolocation is activated, pass the coordinates into the location callback
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(convertToMapURI)
    } else {
      console.log("Geolocation is not supported by this browser")
    }

    return () => {}
  }, [children, lat, lng])

  return (
    <DirectionsText
      href={`https://www.google.com/maps/dir/?api=1&origin=${concatenateCoordinates}&destination=${lat},${lng}&dir_action=navigate`}
      target="_blank"
    >
      {children}
    </DirectionsText>
  )
}

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default Directions

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
