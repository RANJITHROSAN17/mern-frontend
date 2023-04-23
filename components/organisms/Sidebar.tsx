import EventList from "../molecules/EventList";
import AvatarMenu from "../molecules/AvatarMenu";
import MiniCalendar from "../molecules/MiniCalendar";
const Sidebar = () => {
    return ( 
        <>
            <AvatarMenu/>
            <EventList/>
            <MiniCalendar/>
        </>

     );
}
 
export default Sidebar;