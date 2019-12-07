// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import moment from 'moment';
import React from 'react';

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
// Helper function to display the raw daily open business hours with the proper day of the week
export const todaysBusinessHours = hours => {
    const weekDayArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const formattedWeekDayArray = [];
    for(let i = 0; i < hours.length; i++) {
        const loopedBusinessHoursStart = moment(hours[i].start, 'HH:mm').format('h:mm a');
        const loopedBusinessHoursEnd = moment(hours[i].end).format('h:mm a');
        const loopedWeekdayArray = weekDayArray[i];
        formattedWeekDayArray.push(<span>{loopedWeekdayArray}: {loopedBusinessHoursStart} - {loopedBusinessHoursEnd}</span>)
    } 
    return formattedWeekDayArray;
}

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
