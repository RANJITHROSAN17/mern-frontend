import {Button} from '@chakra-ui/react';
import React, { useMemo } from 'react';
import {useCalendar} from '../../../hooks/CalendarContext';
import { DateColumnHelper } from './DateHelper';


interface ColumnProps {
    dates: Date[];
    months?: boolean;
    years?: boolean;
}

export const Days: React.FC<ColumnProps> = ({
    dates,
    months = false,
    years = false,
}) => {
    const context = useCalendar();
    const [date, setDate] = context.currentDate;
    const [selectedDate, setSelectedDate] = context.selectedDate;
    const helper = new DateColumnHelper();
   

    const handleSelect = (n: Date) => () => {
        // if (months) {
        //     selectedDate?.setFullYear(
        //         date?.getFullYear() || new Date().getFullYear()
        //     );
        //     selectedDate?.setMonth(n.getMonth());
        //     setSelectedDate(new Date(selectedDate || new Date()));
        //     setDate(new Date(selectedDate || new Date()));
        // } else if (years) {
        //     date?.setFullYear(n.getFullYear());
        //     setDate(new Date(date || new Date()));
        // } else {
        //     setSelectedDate(new Date(n));
        //     setDate(new Date(n));
        // }
    };

    return (
        <>
            {dates.map((n, i) => (
                <Button
                    key={i}
                    size="md"
                    onClick={handleSelect(n)}
                    variant={helper.selected(n) ? 'solid' : 'ghost'}
                    colorScheme={helper.selected(n) ? 'teal' : undefined}
                    color={helper.outOfMonth( n) ? 'gray.400' : undefined}
                >
                    {helper.getButtonText(n, 'day')}
                </Button>
            ))}
        </>
    );
};
