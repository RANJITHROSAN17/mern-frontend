import Sidebar from "./organisms/Sidebar";
import MainCalendar from "./organisms/MainCalendar";
import { CalendarProvider } from "./CalendarProvider";
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