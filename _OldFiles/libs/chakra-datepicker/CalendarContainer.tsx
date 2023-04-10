import React, { useEffect } from 'react';
import { CalendarContent } from './components/CalendarContent';
import { CalendarHeader } from './components/CalendarHeader';
import { useCalendar } from '../../context/CalendarContext';
import { CalendarProps } from './props';

export const CalendarContainer: React.FC<CalendarProps> = (props) => {
    const {
        selectedDate: [date],
    } = useCalendar();
    const onChange = () => {
        props.onDateChange?.(date);
    };
    useEffect(() => {
        onChange()
    }, [date]);

    return (
        <>
            <div className='flex flex-col'>
                {!!props.canPickYear &&  <CalendarHeader /> }
                <CalendarContent canPickYear={props.canPickYear}/>
            </div>
        </>
    );
};
