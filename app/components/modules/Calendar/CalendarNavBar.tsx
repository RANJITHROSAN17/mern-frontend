import { CalendarShowType, CalendarShowTypes } from 'types/Calendar';
import Button from '@/components/atoms/Button';
import Paragraph from '@/components/atoms/Paragraph';
const CalendarNavBar = ({ onChangeShowType }) => {
    const buttonsLabels = Object.keys(CalendarShowTypes);
    return (<div className="flex justify-between items-center px-8 bg-cyan-200 ">
        <Paragraph>April 2019</Paragraph>
        <div className='flex gap-2'>
            {buttonsLabels.map((label) => {
                return <Button
                    key={"calendar_button_" + label}
                    className="bg-cyan-300 p-2 rounded-md"
                    onClick={() => onChangeShowType(label)}
                >
                    {CalendarShowTypes[label]}
                </Button>
            })}
        </div>
    </div>
    );
}

export default CalendarNavBar;