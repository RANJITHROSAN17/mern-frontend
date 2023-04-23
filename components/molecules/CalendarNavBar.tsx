import Button from '../atoms/Button';
import Paragraph from '../atoms/Paragraph';
const CalendarNavBar = () => {
    const buttonsLabels = ["Today", "Day", "W", "M", "Y"]
    return (<div className="flex justify-between items-center px-8 bg-cyan-200 ">
        <Paragraph>April 2019</Paragraph>
        <div className='flex gap-2'>
        {buttonsLabels.map((label) => {
            return <Button className="bg-cyan-300 p-2 rounded-md" label={label}></Button>
        })}
        </div>
    </div>
    );
}

export default CalendarNavBar;