'use client'
import React, {  useState } from 'react';
import {CalendarContext} from '@/hooks/useCalendar';
interface Props {
    initialValue?: string;
    children?: React.ReactNode;
}

export const CalendarProvider: React.FC<Props> = ({
    initialValue = null,
    children,
}) => {
    // Stored as the JS date object
    const currentDate = useState<Date | null>(JSON.parse(initialValue));

    // Currently selected date
    const selectedDate = useState<Date | null>(JSON.parse(initialValue));

    // Selecting the year & month rather than the day
    const isSelectingYear = useState(false);

    // Used to store the current index for the year view
    const yearScrollIndex = useState(0);

    return (
        <CalendarContext.Provider
            value={{
                currentDate,
                selectedDate,
                isSelectingYear,
                yearScrollIndex,
            }}
        >
            {children}
        </CalendarContext.Provider>
    );
};
