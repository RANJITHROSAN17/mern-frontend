import { Box, Button, Flex } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { useCalendar } from '../../../context/CalendarContext';
import { DateColumnArithemetic } from '../helpers/dateColumnArithmentic';

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
    const [date, setDate] = context.date;
    const [selectedDate, setSelectedDate] = context.selectedDate;

    const helpers = useMemo(
        () =>
            new DateColumnArithemetic(dates, date, selectedDate, years, months),
        [dates, date, selectedDate, years, months]
    );

    const handleSelect = (n: Date) => () => {
        if (months) {
            selectedDate?.setFullYear(
                date?.getFullYear() || new Date().getFullYear()
            );
            selectedDate?.setMonth(n.getMonth());
            setSelectedDate(new Date(selectedDate || new Date()));
            setDate(new Date(selectedDate || new Date()));
        } else if (years) {
            date?.setFullYear(n.getFullYear());
            setDate(new Date(date || new Date()));
        } else {
            setSelectedDate(new Date(n));
            setDate(new Date(n));
        }
    };

    return (
        <>
            {dates.map((n, i) => (
                <Button
                    key={i}
                    size="md"
                    onClick={handleSelect(n)}
                    variant={helpers.selected(n) ? 'solid' : 'ghost'}
                    colorScheme={helpers.selected(n) ? 'teal' : undefined}
                    color={helpers.outOfMonth( n) ? 'gray.400' : undefined}
                >
                    {helpers.getButtonText(n)}
                </Button>
            ))}
        </>
    );
};
