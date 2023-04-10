import { Box, Divider, Flex, IconButton } from '@chakra-ui/react';
import React from 'react';
import { IoCaretBack, IoCaretForward } from 'react-icons/io5';
import { FULL_MONTH_NAMES } from '../constants';
import { useCalendar } from '../../../context/CalendarContext';

export const CalendarHeader = () => {
    const context = useCalendar();
    const [_date, setDate] = context.date;
    const [selectedDate, setSelectedDate] = context.selectedDate;
    const [selectingYear, setSelectingYear] = context.selectingYear;

    const date = _date || new Date();

    const month = date.getMonth();
    const year = date.getFullYear();

    const onChange = (dir: 'forward' | 'backward') => () => {
        const terminator = dir === 'backward' ? 0 : 11;
        const adder = dir === 'backward' ? -1 : 1;

        if (selectingYear) {
            context.yearScrollIndex[1]((x) => x + adder);
            return;
        }

        if (month === terminator) {
            date.setFullYear(year + adder, Math.abs(11 - month));
            setSelectedDate(new Date(date));
        } else {
            date.setMonth(month + adder);
            setSelectedDate(new Date(date));
        }

        setDate(new Date(date));
    };

    const onYearChange = () => {
        setSelectingYear((x) => !x);
    };

    const monthName = FULL_MONTH_NAMES[date.getMonth()];

    return (
        <>
            <div className='flex my-2 items-center'>
                <div>
                    <IconButton
                        icon={<IoCaretBack />}
                        size="sm"
                        aria-label="previous"
                        onClick={onChange('backward')}
                    />
                </div>
                <div 
                    className='flex flex-1 justify-center font-bold text-lg select-none cursor-pointer'
                    onClick={onYearChange}
                >
                    {!selectingYear ? `${monthName} ${year}` : 'Back'}
                </div>
                <div>
                    <IconButton
                        icon={<IoCaretForward />}
                        size="sm"
                        aria-label="next"
                        onClick={onChange('forward')}
                    />
                </div>
            </div>
            <Divider />
        </>
    );
};
