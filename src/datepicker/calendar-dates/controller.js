import {WEEK_OF_ROW, DATE_COLUMNS} from '../util.js';
export default class Controller {
    constructor($scope, $element, $attrs, $locale) {
        'ngInject';
        const {SHORTDAY} = $locale.DATETIME_FORMATS;
        this.SHORTDAY = SHORTDAY.map(day => day.replace('周', ''));
        this.DATE_COLUMNS = Array.from({length: DATE_COLUMNS}).map((d, i) => i + 1);
    }
    // 日期按周分组
    daysOfWeeks(column) {
        this.dates = this.dates || [];
        const sliceForm = (column - 1) * WEEK_OF_ROW;
        return this.dates.slice(sliceForm * 1, sliceForm + WEEK_OF_ROW);
    }
    // 高亮已选择的时间
    handleIsSelectedDate(d) {
        const a = moment(d, this.dateFormat);
        const b = moment(this.selectedDate, this.dateFormat);
        return a.isSame(b, 'day');
    }
    onSelectDate(date) {
        if (this.onClickDate) this.onClickDate({date});
    }
}
