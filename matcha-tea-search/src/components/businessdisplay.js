// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

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
    color: gray;
    font-size: 0.9em;
`;

const BusinessRating = styled(BusinessContactInfo)`
    color: #fff;
    padding-top: 2em;
`;

const BusinessHours = styled(BusinessContactInfo)`
    color: ${props => props.isBusinessOpen ? 'blue' : 'red'};
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

// ---------------------------------------------------------------------------------- //

const BusinessDisplay = props => {
    const { data } = props;
    console.log(data);
    // ! - These variables will be changed in the future to be pulled out of an array
    // ! - These are being used temporary to build out a component to display data
    const businessName = data[0].name;
    const businessPhoto = data[0].photos[0];
    const businessState = data[0].location.state;
    const businessRating = data[0].rating;
    const businessAddressOne = data[0].location.address1;
    const businessPhoneNumber = data[0].display_phone;
    const businessCityLocation = data[0].location.city;
    const isBusinessOpen = data[0].hours[0].is_open_now;
    return (
        <BusinessGrid item lg={10}>
            <BusinessImage src={businessPhoto} alt={businessName} />
            <NestedBusinessGrid item lg={8}>
                <BusinessFont variant='h2'>{businessName}</BusinessFont>
                {/* // ? If the business is currently open(Open during business hours) then display either an open or closed message that's color coordinated */}
                {isBusinessOpen ? <BusinessHours isBusinessOpen>Currently Open</BusinessHours> : <BusinessHours>Currently Closed</BusinessHours>}
                <BusinessRating>Rating: {businessRating ? businessRating : 'No one has rated this business yet'}</BusinessRating>
            </NestedBusinessGrid>
            <BusinessAddressGrid item lg={4}>
                <BusinessContactInfo variant='subtitle1'>{businessPhoneNumber}</BusinessContactInfo>
                <BusinessContactInfo variant='subtitle1'>{businessAddressOne}</BusinessContactInfo>
                <BusinessContactInfo variant='subtitle1'>{businessCityLocation}, {businessState}</BusinessContactInfo>
            </BusinessAddressGrid>
        </BusinessGrid>
    );
}

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default BusinessDisplay;

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //



