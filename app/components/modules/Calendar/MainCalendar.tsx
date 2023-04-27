'use client'
import CalendarNavBar from '@/modules/Calendar/CalendarNavBar';
import Calendar from './Calendar';
import styles from '@/styles/MainCalendar.module.css';
import { CalendarShowType, CalendarShowTypes } from '@/types/Calendar';
import React, { useState } from "react";
const MainCalendar = () => {
    
    const [ShowType, setShowType] = useState<CalendarShowType>("Day");
    const handleChangeShowType = (CalendarShowType: CalendarShowType) => {
        setShowType(CalendarShowType);
    }
    

    return ( <div className={styles.main__calendar}>
        <CalendarNavBar onChangeShowType={handleChangeShowType}/>
        <Calendar ShowType={ShowType}/>
    </div> );
}
 
export default MainCalendar;