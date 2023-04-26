import React,{useState,useEffect} from 'react'
import { EmptyView, DayView, WeekView, MonthView, YearView } from './index';
const Calendar = ({ShowType}) => {
    type CalendarView =  React.ReactNode;
    const [currentView, setCurrentView] = useState<CalendarView>(EmptyView);
    useEffect(() => {
        let view = EmptyView
        switch (ShowType) {
            case "Day":
                view = DayView;
                break;
            case "Week":
                view = WeekView;
                break;
            case "Month":
                view = MonthView;
                break;
            case "Year":
                view = YearView;
                break;
            default:
                break;
        }
        setCurrentView(view);

    }, [ShowType]);
    return ( <div className="bg-purple-200">
        {currentView}
    </div> );
}












 
export default Calendar;