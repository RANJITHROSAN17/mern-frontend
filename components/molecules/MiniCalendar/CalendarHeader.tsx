'use client'
import Divider from '../../atoms/Divider';
import React, { useEffect } from 'react';
import { IoCaretBack, IoCaretForward } from 'react-icons/io5';
import { FULL_MONTH_NAMES } from '../../../@types/constants';
import { useCalendar } from '../../../hooks/CalendarContext';

/**
 * it shows the left and right arrows to change the month
 * button back to calendar view / year view
 */
export const CalendarHeader = () => {
    const context = useCalendar();
    const [currentDate, setCurrentDate] = context.currentDate;
    const [isSelectingYear, setIsSelectingYear] = context.isSelectingYear;
    const [date, setDate] = React.useState<Date | null>();  

    useEffect(() => {
        setDate(new Date(currentDate));
    }, [currentDate]);
    
    const onChange = (dir: 'forward' | 'backward') => () => {
        const numberOfMonths = 12;
        const intDir = (dir === 'backward' ? -1 : 1);
        if (isSelectingYear) {
            const offset = intDir * numberOfMonths;
            setCurrentDate((prev) => {
                const prevDate = new Date(prev);
                const newDate = new Date(prevDate.getFullYear() + offset, prevDate.getMonth(), prevDate.getDay());
                return newDate;
            });
        } else {
            setCurrentDate((prev) => {
                const prevDate = new Date(prev);
                const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() + intDir, prevDate.getDay());
                return newDate;
            }
            );
        }
    };



const onYearChange = () => {
    //save date with current day, month, year to context
    setIsSelectingYear((x) => !x);
};

return (
    <>
        <div className='flex my-2 items-center'>
        <IoCaretBack onClick={onChange('backward')}/>
            
            <div
                className='flex flex-1 justify-center font-bold text-lg select-none cursor-pointer'
                onClick={onYearChange}
            >
                {!isSelectingYear ? `${FULL_MONTH_NAMES[date?.getMonth()]} ${date?.getFullYear()}` : 'Back'}
            </div>
        <IoCaretForward onClick={onChange('forward')} />
        </div>
        <Divider />
    </>
);
};
