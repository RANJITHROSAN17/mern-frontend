import { CalendarContainer } from "../../libs/chakra-datepicker/CalendarContainer";
import { CalendarProps } from "../../libs/chakra-datepicker/props";
type props = {
    datePickerProps: CalendarProps;
}
const Calendar = ({datePickerProps} : props) => {
    return ( <div className="bg-gray-100 grid grid-rows-calendar">
        <div></div>
        <div>
            <CalendarContainer canPickYear={false} {...datePickerProps} />
        </div>
    </div> );
}
 
export default Calendar;