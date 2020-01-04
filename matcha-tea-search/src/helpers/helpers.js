// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import moment from "moment"
import React from "react"

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
// Helper function to display the raw daily open business hours with the proper day of the week
export const todaysBusinessHours = hours => {
  const weekDayArray = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]
  const formattedWeekDayArray = []
  // * If the hours of business array exists and also isn't empty, then loop over the nested objects and the properties within those objects
  if (hours && hours.length !== "null") {
    for (let i = 0; i < hours.length; i++) {
      const loopedBusinessHoursStart = moment(hours[i].start, "HH:mm").format(
        "h:mm a"
      )
      const loopedBusinessHoursEnd = moment(hours[i].end, "HH:mm").format(
        "h:mm a"
      )
      const loopedWeekdayArray = weekDayArray[i]
      formattedWeekDayArray.push(
        <span key={i}>
          {loopedWeekdayArray}: {loopedBusinessHoursStart} -{" "}
          {loopedBusinessHoursEnd}
        </span>
      )
    }
  }
  return formattedWeekDayArray
}

export const retrieveCurrentLocation = (lat, lng) => {
  // * If user allows the geolocation API to track them, then display their coordinates as the route origin 
  const convertToMapURI = position => {
    if (position.coords) {
      window.open(`https://www.google.com/maps/dir/?api=1&origin=${position.coords.latitude},${position.coords.longitude}&destination=${lat},${lng}&dir_action=navigate`)
    } 
  }

  // ! If user denies the request to track them via the geolocation API, but still clicks for directions
  // ! Then open the Google Directions window without their coordinates as the route origin - this will still display the destination, but the user will manually have to enter their location
  const onErrorCallback = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&origin=&destination=${lat},${lng}&dir_action=navigate`)
  }

  // * If geolocation is activated, pass either the coordinates into the location callback, or run the error callback if the request was denied
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(convertToMapURI, onErrorCallback)
  } else {
    console.log("Geolocation is not supported by this browser")
  }
}

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
