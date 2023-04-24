import CalendarNavBar from '../molecules/CalendarNavBar';
import Calendar from '../molecules/Calendar';
import styles from '../../styles/MainCalendar.module.css';

const MainCalendar = () => {
    return ( <div className={styles.main__calendar}>
        <CalendarNavBar/>
        <Calendar/>
    </div> );
}
 
export default MainCalendar;