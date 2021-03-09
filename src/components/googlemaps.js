// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { Grid } from "@material-ui/core"
import GoogleMapReact from "google-map-react"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import MapMarker from "./mapmarker"

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const GoogleMapComponent = styled(Grid)`
  height: 100vh;
  width: 100%;
  padding: 1em;
  @media (min-width: 1280px) {
    padding: 0 1.5em 1.5em 1.5em;
  }
`
// ---------------------------------------------------------------------------------- //

// The three following functions were taken from the following example - https://github.com/google-map-react/google-map-react-examples/blob/master/src/examples/Main.js#L69

// Access the Maps constructor from Google Maps to create a new Lat and Long Bounds method
// Loop over the array of coordinates passed in to set the Lat/Long bounds
// Set the 'bounds' variable to the information being looped
// This will grab the bounds we need to display on the map
const getMapBounds = (_, maps, bulkCoordinates) => {
  const bounds = new maps.LatLngBounds()

  bulkCoordinates.map(location => {
    return bounds.extend(new maps.LatLng(location.latitude, location.longitude))
  })
  return bounds
}

// Re-center map when resizing the window
const bindResizeListener = (map, maps, bounds) => {
  maps.event.addDomListenerOnce(map, "idle", () => {
    maps.event.addDomListener(window, "resize", () => {
      map.fitBounds(bounds)
    })
  })
}

// Fit map to its bounds after the api is loaded
const apiIsLoaded = (map, maps, bulkCoordinates) => {
  // Get bounds by our coordinates
  const bounds = getMapBounds(map, maps, bulkCoordinates)
  // Fit map to bounds
  map.fitBounds(bounds)
  // Bind the resize listener
  bindResizeListener(map, maps, bounds)
}

// ---------------------------------------------------------------------------------- //

const GoogleMapContainer = ({ data }) => {
  const [coords, setCoords] = useState(null)
  // Create an empty array for coordinates returned from a search response
  let bulkCoordinates = []
  // Loop over the array and push the coordinates into the empty array
  for (let i = 0; i < data.length; i++) {
    bulkCoordinates.push(data[i].coordinates)
  }

  // Sets state to the first coordinate returned in the search response
  // 'data' is set as a dependency
  useEffect(() => {
    setCoords({
      lat: data[0].coordinates.latitude,
      lng: data[0].coordinates.longitude,
    })
  }, [data])

  return (
    <GoogleMapComponent>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAPS_API_KEY }}
        zoom={3}
        yesIWantToUseGoogleMapApiInternals
        center={coords}
        defaultCenter={{ lat: 40.7128, lng: 74.006 }}
        onGoogleApiLoaded={({ map, maps }) =>
          apiIsLoaded(map, maps, bulkCoordinates)
        }
      >
        {data.map((loc, i) => (
          <MapMarker
            lat={loc.coordinates.latitude}
            lng={loc.coordinates.longitude}
            key={i}
            numberInList={i}
            businessName={loc.name}
            businessPhoto={loc.photos[0]}
            businessPhone={loc.display_phone}
            businessAdress1={loc.location.address1}
            businessCity={loc.location.city}
            businessPostalCode={loc.location.postal_code}
            businessState={loc.location.state}
            businessCountry={loc.location.country}
          />
        ))}
      </GoogleMapReact>
    </GoogleMapComponent>
  )
}

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default GoogleMapContainer

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
