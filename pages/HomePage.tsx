import Sidebar from "../components/organisms/Sidebar";
import MainCalendar from "../components/organisms/MainCalendar";

const HomePage = () => {
    return ( 
        <>
        <div className="h-screen grid grid-cols-[200px_1fr]">
            <Sidebar/>
            <MainCalendar/>
        </div>
            
        </>

     );
}
 
export default HomePage;