// import {WEEK_OF_ROW, DATE_COLUMNS} from '../../helper/helper';
export default class Controller {
    $onChanges(changesObj) {
        const {yearsPanelOpened} = changesObj;
        if (yearsPanelOpened && yearsPanelOpened.currentValue) {
            this.years = this.yearsGenerator(this.selectedDate || this.calendarDate);
        }
    }
    isActiveYear(y) {
        const currentYear = moment(this.calendarDate).get('year');
        return currentYear === y;
    }
    handleSelectYear(y) {
        this.onSelectYear({y});
    }
    // 更新年份
    yearsGenerator(d) {
        const daysToPrepend = 10;
        const daysToAppend = 14;
        const theNewYears = [];
        const currentYear = moment(d).get('year');
        for (let i = daysToPrepend; i > 0; i -= 1) {
            theNewYears.push(+currentYear - i);
        }
        for (let i = 0; i < daysToAppend; i += 1) {
            theNewYears.push(+currentYear + i);
        }
        return theNewYears;
    }
}
