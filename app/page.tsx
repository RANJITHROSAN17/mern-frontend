'use client';

import { useState } from "react";
import Sidebar from "../components/organisms/Sidebar";
import Calendar from "../components/organisms/Calendar";
import { CalendarProvider } from '../hooks/CalendarContext';
import { useMyAccount } from "../hooks/MyAccountContext";
import NotAuthenticated from "../components/organisms/NotAuthenticated";


const Home = () => {
    const [date, setDate] = useState(new Date());
    const handleDateChange = (d : Date | null) => {
    }
    const context = useMyAccount();
    const isAuthenticated = false;
    return (
        <>
            {isAuthenticated ? 
            (
            <div className="h-screen grid grid-cols-sidebar-calendar">
                <CalendarProvider initialValue={date} >
                    <Sidebar datePickerProps={{
                        onDateChange: handleDateChange 
                    }} />
                    <Calendar datePickerProps={{
                        onDateChange: handleDateChange
                    }}/>
                </CalendarProvider>
            </div>)
            : (<NotAuthenticated/>)
}
        </>


    );
}

export default Home;