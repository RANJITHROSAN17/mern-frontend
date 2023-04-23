import CalendarNavBar from '../molecules/CalendarNavBar';
import Calendar from '../molecules/Calendar';
import styles from '../../styles/MainCalendar.module.css';

const MainCalendar = () => {
    return ( <div className={styles.main__calendar}>
        <div className="bg-cyan-200">
        <CalendarNavBar/>
        </div>
        <div className="bg-violet-300">
        <Calendar/>
        </div>
    </div> );
}
 
export default MainCalendar;