import Sidebar from "../components/organisms/Sidebar";
import MainCalendar from "../components/organisms/MainCalendar";
import { CalendarProvider } from "../hooks/CalendarContext";
const HomePage = () => {
    return (
        <>
            <div className="h-screen grid grid-cols-[200px_1fr]">
                <CalendarProvider initialValue={JSON.stringify(new Date())} >
                    <Sidebar />
                    <MainCalendar />
                </CalendarProvider>
            </div>

        </>

    );
}

export default HomePage;