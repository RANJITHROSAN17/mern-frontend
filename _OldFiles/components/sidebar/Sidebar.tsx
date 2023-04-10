
import AccountMenu from "./AccountMenu";
import EventCategories from "./EventCategories";
import { Divider } from '@chakra-ui/react'
import { CalendarProps } from "../../libs/chakra-datepicker/props";
import MiniCalendar from "../calendar/MiniCalendar";
type SidebarProps = {
    datePickerProps: CalendarProps;
}
const Sidebar = ({datePickerProps} : SidebarProps) => {
    return (<div className="bg-gray-200 p-2 flex flex-col justify-between">
        <div className="flex flex-col gap-2">
            <AccountMenu />
            <Divider />
            <EventCategories />
        </div>
        <div>
            <Divider />
            <MiniCalendar datePickerProps={{...datePickerProps , canPickYear: true}} />
        </div>
    </div>);
}

export default Sidebar;