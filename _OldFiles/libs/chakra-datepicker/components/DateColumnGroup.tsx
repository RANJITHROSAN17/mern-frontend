import { Box, Flex, Stack } from '@chakra-ui/react';
import React from 'react';
import { DateHeaderColumn } from './DateHeaderColumn';

interface ColumnGroupProps {
    dates: Date[];
    title: string;
    subtitle?: string;
    columnSize?: number;
    months?: boolean;
    years?: boolean;
}

export const DateColumnGroup: React.FC<ColumnGroupProps> = ({
    dates,
    title,
    columnSize = 6,
    subtitle = '',
    ...rest
}) => {
    return (
        <div>
            <div className='flex flex-row justify-center items-center'>
                <div className="mt-2 text-center font-semibold" >
                    {title}
                </div>
                {Boolean(subtitle) && (
                    <div className='mt-2 ml-2 text-center font-medium text-sm'>
                        {subtitle}
                    </div>
                )}
            </div>
            <div>
                <DateHeaderColumn dates={dates} {...rest} />
            </div>
        </div>
    );
};
