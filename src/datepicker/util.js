const WEEK_OF_ROW = 7;
const DATE_COLUMNS = 6;
const ALL_DAY_OF_PANEL = WEEK_OF_ROW * DATE_COLUMNS;
const Helper = {
    daysGenerator(option) {
        const {
            d,
            DATE_FORMAT,
            dateMax,
            dateMin,
            disabledMinDate,
            disabledMaxDate,
            canDisabledWeekdays,
            disabledWeekdays
        } = option;
        const result = [];

        const firstDayOfMonth = Helper.getFirstDayOfMonth(d);
        const daysInPrevMonth = Helper.getDaysInPrevMonth(d);
        if (firstDayOfMonth !== 7) {
            let p = daysInPrevMonth - firstDayOfMonth;
            while (p < daysInPrevMonth) {
                const day = ++p;
                const theDate = moment(d).subtract(1, 'months').set('date', day).startOf('date');
                result.push({
                    date: theDate.format(DATE_FORMAT),
                    value: theDate.valueOf(),
                    prev: true,
                    day
                });
            }
        }
        Array.from({length: moment(d).daysInMonth()}).forEach((t, i) => {
            const day = i + 1;
            const theDate = moment(d).set('date', day).startOf('date');
            const date = theDate.format(DATE_FORMAT);
            const value = theDate.valueOf();
            const weekday = theDate.isoWeekday();
            const disabledMin = dateMin && value < disabledMinDate;
            const disabledMax = dateMax && value > disabledMaxDate;
            const isToday = Helper.handleIsToday(date);
            const disabledWeeekDays = canDisabledWeekdays && disabledWeekdays.includes(weekday);
            // if (disabledMinDate && Helper.handleIsToday(disabledMinDate)
            //     && Helper.handleIsToday(theDate)) {
            //     disabledMin = false;
            // }
            result.push({
                date,
                disabled: disabledMin || disabledMax || disabledWeeekDays,
                value,
                isToday,
                day
            });
        });
        let n = 0;
        const len = ALL_DAY_OF_PANEL - result.length;
        while (n <= len) {
            const day = ++n;
            const theDate = moment(d).add(1, 'months').set('date', day).startOf('date');
            result.push({
                date: theDate.format(DATE_FORMAT),
                value: theDate.valueOf(),
                next: true,
                day
            });
        }
        return result;
    },
    handleIsToday(d) {
        const today = moment().format('YYYY/MM/DD');
        const vDate = moment(d).format('YYYY/MM/DD');
        return today === vDate;
    },
    // 获取上一月多有多少天
    getDaysInPrevMonth(d) {
        return moment(d).subtract(1, 'months').daysInMonth();
    },
    // 获取第一天是周几
    getFirstDayOfMonth(d) {
        return moment(d).set('date', 1).get('day');
    },
    validateDate(d, format) {
        if (!d) return false;
        return moment(d, format, true).isValid();
    }
};
export {Helper, WEEK_OF_ROW, DATE_COLUMNS};
