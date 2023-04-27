import dayjs from 'dayjs';
import { SHORT_MONTH_NAMES } from '../../../@types/constants';


function getDaysOfMonth(input: Date): Date[] {
    const date = new Date(input);
    const numberOfWeeks = 6;
    const startOfMonth = dayjs(date).startOf("month").day();
    const dateStartOfMonth = dayjs().startOf('month').toDate();
    let start = -startOfMonth + 1; // 1 = monday
    const days: Date[] = new Array(numberOfWeeks * 7);
    for (let i = 0; i < numberOfWeeks * 7; i++) {
        const date = dayjs(dateStartOfMonth).add(start + i, 'day').toDate();
        days[i] = date;
    }
    return days;

}

function getMonths(date: Date) {
    const currentYear = date.getFullYear();
    const currentDate = date.getDate();
    return [...new Array(12)].map(
        (_, idx) => new Date(currentYear, idx, currentDate)
    );
}

function getNearbyYears(date: Date, numberOfYears : number): Date[] {
    date = new Date(date);
    const currentYear = date.getFullYear();
    const startValue = Math.floor(currentYear / numberOfYears) * numberOfYears;
    return [...new Array(numberOfYears)].map(
        (_, idx) => new Date(startValue + idx, date.getMonth(), date.getDate())
    );
}


class DateColumnHelper {
    constructor() {}

    selected(n: Date) {
        // TODO: Fix this
        // if (this.months) {
        //     return n.getMonth() === this.selectedDate?.getMonth();
        // } else if (this.years) {
        //     return n.getFullYear() === this.viewingDate?.getFullYear();
        // }
        // console.log(this.selectedDate)
        // return n.getTime() === this.selectedDate?.getTime();
        return false;   
    }

    outOfMonth(date : Date | null) {
        // console.log(date)
        // console.log(dayjs(this.viewingDate).month(),dayjs(date).month())
        // return (
        //     dayjs(this.viewingDate).month() !=  dayjs(date).month()
        // );
        return false;
    }
    getButtonText (date: Date, fragment: "year" | "month" | "day")  {
        if(fragment === "year")
            return date.getFullYear().toString();
        if(fragment === "month")
            return SHORT_MONTH_NAMES[date.getMonth().toString()];
        return date.getDate().toString();
        }
}


export  {getDaysOfMonth,getMonths,getNearbyYears,DateColumnHelper };