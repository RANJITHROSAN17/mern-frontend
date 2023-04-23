import EventList from "../molecules/EventList";
import AvatarMenu from "../molecules/AvatarMenu";
import MiniCalendar from "../molecules/MiniCalendar";
import styles from '../../styles/Sidebar.module.css';
const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
                <AvatarMenu />
            <div className="flex flex-col items-center bg-red-100">
                <EventList />
                <MiniCalendar />
            </div>
        </div>

    );
}

export default Sidebar;