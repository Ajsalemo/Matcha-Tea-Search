// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { Grid, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const StyledLimitSelect = styled(InputLabel)`
    font-size: 0.7em;
`;

const ParentSelectGrid = styled(Grid)`
    border-left: 1px solid #000;
    padding: 0em 0.3em;
`;

// ---------------------------------------------------------------------------------- //

// This function loops values between 5 and 50 in increments of 5, the value is then assigned in value, key and description to the component
// During the loop, the components are pushed to an array that starts out as empty - this array is then returned by the function complete with the values
const LimitSelect = ({ results, handleChange }) => {
    let menuComponent = [];
    for(let i = 5; i > 0 && i <= 25; i+=5) {
        menuComponent.push(i);
    }

    return (
        <ParentSelectGrid>
            <StyledLimitSelect id='results-select'>Results</StyledLimitSelect>
            <Select
                id='results-select-value'
                name='results'
                value={results}
                onChange={handleChange}
            >
                {menuComponent.map((val, j) => (
                    <MenuItem value={val} key={j}>{val}</MenuItem>
                ))}
            </Select>
        </ParentSelectGrid>
    );
}

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default LimitSelect;

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
