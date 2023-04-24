'use client';
import React from 'react';
import { Button } from '@chakra-ui/react';
import { DateColumnHelper  }  from './DateHelper';
interface ColumnGroupProps {
    dates: Date[];
    title: string;
    fragment: "year" | "month";
}

export const DateColumnGroup: React.FC<ColumnGroupProps> = ({
    dates,
    title,
    fragment
}) => {
    const helper = new DateColumnHelper();
    const handleSelect = (date: Date) => () => {
        console.log(date);
    };
   

    return (
            <div className='flex flex-col justify-center ' style={{ marginLeft: '0px' }} >
                {Boolean(title) && (
                    <div className='my-2 text-center font-semibold'>
                        {title}
                    </div>
                )}
                {dates.map((n, i) => (
                    <Button
                        key={i}
                        size="md"
                        onClick={handleSelect(n)}
                        variant={helper.selected(n) ? 'solid' : 'ghost'}
                        colorScheme={helper.selected(n) ? 'teal' : undefined}
                        color={helper.outOfMonth(n) ? 'gray.400' : undefined}
                    >
                        {helper.getButtonText(n, fragment)}
                    </Button>
                ))}
            </div>
    );
};
