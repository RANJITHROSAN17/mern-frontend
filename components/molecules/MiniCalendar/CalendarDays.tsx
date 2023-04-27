import React, { useEffect, useState } from 'react';
import { DAY_NAMES } from '../../../@types/constants';
import {useCalendar} from '../../../hooks/CalendarContext';
import { Days } from './Days';
import { getDaysOfMonth } from './DateHelper';

export const CalendarDays = () => {
    const context = useCalendar();
    const [date] = context.currentDate;
    const [weeks, setWeeks] = useState<Date[]>();

    useEffect(() => {
        // console.log(getDaysOfMonth(date || new Date()))
        setWeeks(getDaysOfMonth(date || new Date()));
    }, [date]);

    return (
        <div className='grid grid-cols-7 grid-rows-6'>
            {DAY_NAMES.map((title, idx) => {
                return  Boolean(title) && (
                    <div key={title + idx} className='my-2 text-center font-semibold'>
                        {title}
                    </div>
                )
            }
            )}
              <Days
                    dates={weeks ?? []}
                />
        </div>
    );
};
