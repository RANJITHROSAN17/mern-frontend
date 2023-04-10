import React from 'react';
import { useCalendar } from '../../../context/CalendarContext';
import { CalendarDays } from './CalendarDays';
import { CalendarYears } from './CalendarYears';
type CalendarContentProps = {
    canPickYear? : boolean;
};
export const CalendarContent = ({ canPickYear  }: CalendarContentProps)  => {
    const context = useCalendar();

    if (canPickYear && context.selectingYear[0]) {
        return <CalendarYears />;
    } else {
        return <CalendarDays />;
    }
};
