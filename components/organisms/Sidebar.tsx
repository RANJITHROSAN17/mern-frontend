import CheckboxList from "../molecules/CheckboxList";
import AvatarMenu from "../molecules/AvatarMenu";
import MiniCalendar from "../molecules/MiniCalendar/MiniCalendar";
import styles from '../../styles/Sidebar.module.css';
const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
                <AvatarMenu />
            <div className="flex flex-col bg-red-100">
                <CheckboxList 
                listItems={['Parties','Game Nights','Reminders']}
                defaultChecked={true}
                Colors={['text-red-600','text-blue-600','text-yellow-600']}
                />
                <MiniCalendar />
            </div>
        </div>

    );
}

export default Sidebar;