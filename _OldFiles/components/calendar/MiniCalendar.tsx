import { CalendarContainer } from "../../libs/chakra-datepicker/CalendarContainer"; 
import { CalendarProps } from "../../libs/chakra-datepicker/props";
type MiniCalendarProps = {
    datePickerProps: CalendarProps;
}
const MiniCalendar = ({datePickerProps} : MiniCalendarProps) => {
    return ( 
        <CalendarContainer {...datePickerProps}/>

     );
}
 
export default MiniCalendar;