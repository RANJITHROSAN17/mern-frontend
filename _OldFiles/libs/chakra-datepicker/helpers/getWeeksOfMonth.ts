
//return array of date objects for each week in the month of the input date
import dayjs from 'dayjs';
export function getWeeksOfMonth(input: Date): Date[] {
    const date = new Date(input);
    const numberOfWeeks = 6;
    const startOfMonth = dayjs(date).startOf("month").day();
    
    let start = -startOfMonth;
    const days: Date[] =new Array(numberOfWeeks * 7);
    for(let i=0;i <numberOfWeeks * 7;i++){
        const date = dayjs(startOfMonth).add(start + i,'day').toDate();
        days[i] = date;
    }
    // console.log(days)
    // console.log(dayjs(startOfMonth).add(0, 'day').toDate())
    return days;

}
