'use client'
import React, { createContext, useContext, useState } from 'react';

type StateType<T> = [T, React.Dispatch<React.SetStateAction<T>>];
type ContextType = {
    currentDate: StateType<Date | null>;
    selectedDate: StateType<Date | null>;
    isSelectingYear: StateType<boolean>;
    yearScrollIndex: StateType<number>;
};

export const CalendarContext = createContext<ContextType>({} as ContextType);

export const useCalendar = () => useContext(CalendarContext);
