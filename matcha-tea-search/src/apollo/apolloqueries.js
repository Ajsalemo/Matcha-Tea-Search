// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { graphql } from 'gatsby';
import gql from 'graphql-tag';

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
// ? This query loads the background image on the landing page with 'gatsby-background-image'
export const headerImageQuery = graphql`
    query {
        file(relativePath: { eq: "matcha-background-image.jpg" }) {
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;

// ---------------------------------------------------------------------------------- //
// ? This query is used as the primary way to retrieve search data
export const LOCATION_SEARCH = gql`
    query LocationSearch($location: String!, $radius: Float!, $limit: Int!) {
        search(term: "matcha", location: $location, radius: $radius, limit: $limit) {
            total
            business {
                name
                id
                alias
                rating
                price
                url
                display_phone
                location {
                    address1
                    address2
                    address3
                    city
                    state
                    postal_code
                    country
                }
                coordinates {
                    latitude
                    longitude
                }
                photos
                hours {
                    open {
                        is_overnight
                        start
                        end
                    }
                    is_open_now
                }
                attributes {
                    wheelchair_accessible {
                        name_code
                        value_code
                    }
                }
                reviews {
                    text
                }
            }
        }
    }
`;

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
