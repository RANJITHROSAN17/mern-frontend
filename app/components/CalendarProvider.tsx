'use client'

import React, { createContext, useContext, useState } from 'react';

type StateType<T> = [T, React.Dispatch<React.SetStateAction<T>>];
type ContextType = {
    currentDate: StateType<Date | null>;
    selectedDate: StateType<Date | null>;
    isSelectingYear: StateType<boolean>;
    yearScrollIndex: StateType<number>;
};

export const CalendarPickerContext = createContext<ContextType>({} as ContextType);

export const useCalendar = () => useContext(CalendarPickerContext);

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
        <CalendarPickerContext.Provider
            value={{
                currentDate,
                selectedDate,
                isSelectingYear,
                yearScrollIndex,
            }}
        >
            {children}
        </CalendarPickerContext.Provider>
    );
};
