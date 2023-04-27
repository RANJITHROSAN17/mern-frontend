'use client'
import { CalendarHeader } from './CalendarHeader';
import {useCalendar} from '@/hooks/useCalendar';
import { CalendarDays } from './CalendarDays';
import { CalendarYears } from './CalendarYears';
import React from 'react';
const MiniCalendar = (props) => {
    const canPickYear = true;
    const context = useCalendar();

    return (
        <div className='flex flex-col'>
       <CalendarHeader /> 
       {context.isSelectingYear[0] ? <CalendarYears /> : <CalendarDays />}
    </div>

    );
}

export default MiniCalendar;