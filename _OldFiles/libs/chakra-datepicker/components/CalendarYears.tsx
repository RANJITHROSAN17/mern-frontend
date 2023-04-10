import { Divider, HStack } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { useCalendar } from '../../../context/CalendarContext';
import { getMonths } from '../helpers/getMonths';
import { getNearbyYears } from '../helpers/getNearbyYears';
import { DateColumnGroup } from './DateColumnGroup';

export const CalendarYears = () => {
    const context = useCalendar();
    const [date] = context.date;
    const [yearsIndex] = context.yearScrollIndex;

    const yearsSize = 12;
    const years = useMemo(
        () =>
        {
            // console.log('CONTEXT', context)
            return getNearbyYears(
                new Date((new Date().getFullYear() ) + yearsIndex * yearsSize, 0),
                yearsSize
            
            )},
        [yearsIndex]
    );
    const months = useMemo(() => getMonths(date || new Date()), [date]);

    return (
        <HStack>
            <DateColumnGroup
                title="Months"
                dates={months}
                columnSize={6}
                months
            />
            <Divider orientation="vertical" h="auto" alignSelf="stretch" />
            <DateColumnGroup
                title="Years"
                subtitle={`(${years[0].getFullYear()} - ${years[
                    years.length - 1
                ].getFullYear()})`}
                dates={years}
                columnSize={6}
                years
            />
        </HStack>
    );
};
