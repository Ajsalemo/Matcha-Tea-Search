// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import styled from "styled-components"

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const StyledLazyLoadImage = styled(LazyLoadImage)`
    border-radius; 0.5em;
    height: 20em;
    width: 100%;
`

// ---------------------------------------------------------------------------------- //

// ? - Implemented this package due to 'gatsby-image' not being able to parse absolute file paths
// ? - Since the landing page background image utilizes gatsby image and gatsby background image, and consistency was needed with the blur-up effect
// ? - This package will still be able to create a blur-up effect for each image on load, including lazy loading images on larger result sizes
const BusinessImage = ({ src, alt }) => (
  <StyledLazyLoadImage alt={alt} src={src} effect="blur" />
)

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default BusinessImage

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
