'use client';
import Divider from '@/components/atoms/Divider';
import React, { useEffect } from 'react';
import { useCalendar } from '@/hooks/useCalendar';
import { DateColumnGroup } from './DateColumnGroup';
import { getMonths, getNearbyYears } from './DateHelper';
export const CalendarYears = () => {

    const context = useCalendar();
    const [currentDate] = context.currentDate;
    const numberOfYears = 12;
    const [years, setYears] = React.useState<Date[]>([]);
    const [months, setMonths] = React.useState<Date[]>([]);
    useEffect(() => {
        setYears(getNearbyYears(
            currentDate,
            numberOfYears
        ));
        setMonths(getMonths(new Date(currentDate) || new Date()));
    }, [currentDate]);

    return (
        <div className='grid' style={{ gridTemplateColumns: '1fr auto 1fr' }}>
            <DateColumnGroup
                title="Months"
                fragment='month'
                dates={months}
            />
            <Divider orientation="vertical" />
            <DateColumnGroup
                title="Years"
                fragment='year'
                dates={years}
            />
        </div>
    );
};
