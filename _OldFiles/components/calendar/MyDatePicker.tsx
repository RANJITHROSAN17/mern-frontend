import { Calendar } from "../../libs/chakra-datepicker";
import { CalendarProps } from "../../libs/chakra-datepicker/props";
type MyCalendarProps = {
  datePickerProps: CalendarProps;
}

const MyCalendar = ({datePickerProps } : MyCalendarProps) => {

  return (
    <>
      <Calendar {...datePickerProps}
      />
    </>
  );
}

export default MyCalendar;