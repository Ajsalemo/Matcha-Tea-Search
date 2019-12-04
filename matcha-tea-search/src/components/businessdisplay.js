// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { Grid, Typography } from '@material-ui/core';
import { Accessible } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const BusinessFont = styled(Typography)`
    font-size: 1.5em;
    font-weight: bold;
    color: #fff;
`;

const BusinessGrid = styled(Grid)`
    display: flex;
    justify-content: space-between;
    border: 1px solid #fff;
    border-radius: 1em;
    padding: 0.7em;
`;

const BusinessImage = styled.img`
    border-radius: 0.5em;
    height: 20em;
`;

const BusinessContactInfo = styled(Typography)`
    color: #92a3ff;
    font-size: 0.9em;
`;

const BusinessRating = styled(BusinessContactInfo)`
    color: #fff;
    padding-top: 2em;
`;

const NestedBusinessGrid = styled(Grid)`
    display: flex;
    padding-left: 0.4em;
    flex-direction: column;
`;

const BusinessAddressGrid = styled(Grid)`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const AttributesDiv = styled(Grid)`
    display: flex;
    align-items: center;
    color: ${props => props.handicapaccessible ? '#92a3ff' : 'red'};
`;

// ---------------------------------------------------------------------------------- //

const BusinessDisplay = props => {
    const { data } = props;
    return data.map(business => {
        // ? Test the object for nested arrays before defining
        const isBusinessOpen = business.hours[0] ? business.hours[0].is_open_now : null;
        const reviewExcerpt = business.reviews ? business.reviews[0].text : null;
        // ? Test both nested objects for a value before defining it
        const handicapAccessible = business.attributes && business.attributes.wheelchair_accessible ? business.attributes.wheelchair_accessible.value_code : null;

        return (
            <BusinessGrid item lg={10} key={business.id}>
                <BusinessImage src={business.photos[0]} alt={business.name} />
                <NestedBusinessGrid item lg={8}>
                    <BusinessFont variant='h2'>{business.name}</BusinessFont>
                    {/* // ? If the business is currently open(Open during business hours) then display either an open or closed message that's color coordinated */}
                    {/* // ? If the 'hours' array is empty, then display nothing */}
                    {isBusinessOpen ? <Typography style={{ color: '#92a3ff' }}>Currently Open</Typography> : isBusinessOpen !== null && !isBusinessOpen ? <Typography color='secondary'>Currently Closed</Typography> : null}
                    <Typography style={{ color: '#fff' }}>{business.price}</Typography>
                    {/* // ? Let the user know whether or not this place of business is wheelchair accessible */}
                    {/* // ? If the 'attributes' array is empty, then display nothing - Yelp's API response returns 'true/false' as a string */}
                    {handicapAccessible === 'true' ? <AttributesDiv handicapaccessible={handicapAccessible}><Accessible /> Accessible</AttributesDiv> : handicapAccessible === 'false' ? <AttributesDiv><Accessible /> Not Accessible</AttributesDiv> : null}
                    <BusinessRating>Rating: {business.rating ? business.rating : 'No one has rated this business yet'}</BusinessRating>
                    <BusinessRating>"{reviewExcerpt}"<Link to='#' style={{ paddingLeft: '0.4em' }}>more</Link></BusinessRating>
                </NestedBusinessGrid>
                <BusinessAddressGrid item lg={4}>
                    <BusinessContactInfo variant='subtitle1'>{business.display_phone}</BusinessContactInfo>
                    <BusinessContactInfo variant='subtitle1'>{business.location.address1}</BusinessContactInfo>
                    <BusinessContactInfo variant='subtitle1'>{business.location.city}, {business.location.state}</BusinessContactInfo>
                    <BusinessContactInfo variant='subtitle1'>{business.location.postal_code}, {business.location.country}</BusinessContactInfo>
                </BusinessAddressGrid>
            </BusinessGrid>
        );
    })
}

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default BusinessDisplay;

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //



