// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

import gql from 'graphql-tag';

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //


export const LOCATION_SEARCH = gql`
    query LocationSearch($location: String!, $radius: Float!, $limit: Int!) {
        search(term: "matcha", location: $location, radius: $radius, limit: $limit) {
            total
            business {
                name
                id
                alias
                rating
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
            }
        }
    }
`;

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
