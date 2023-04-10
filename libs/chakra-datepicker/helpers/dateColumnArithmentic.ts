import { SHORT_MONTH_NAMES } from '../constants';
import dayjs from 'dayjs';
export class DateColumnArithemetic {
    constructor(
        private dates: Date[],
        private viewingDate: Date | null,
        private selectedDate: Date | null,
        private years: boolean,
        private months: boolean
    ) {
        //
    }

    selected(n: Date) {
        if (this.months) {
            return n.getMonth() === this.selectedDate?.getMonth();
        } else if (this.years) {
            return n.getFullYear() === this.viewingDate?.getFullYear();
        }
        return n.getTime() === this.selectedDate?.getTime();
    }

    outOfMonth(date : Date | null) {
        // console.log(date)
        // console.log(dayjs(this.viewingDate).month(),dayjs(date).month())
        return (
            dayjs(this.viewingDate).month() !=  dayjs(date).month()
        );
    }

    getButtonText(n: Date) {
        if (this.months) {
            return SHORT_MONTH_NAMES[n.getMonth()];
        } else if (this.years) {
            return n.getFullYear();
        }
        return n.getDate();
    }
}
