
//return array of date objects for each week in the month of the input date
import dayjs from 'dayjs';

export function getDaysOfMonth(input: Date): Date[] {
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
    // console.log(days)
    // console.log(dayjs().add(0, 'day').toDate())
    return days;

}
