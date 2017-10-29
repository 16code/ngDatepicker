import './style.less';
import controller from './controller';
import datepickerTpl from './tpls/datepicker.html';
import calendarTpl from './tpls/calendar.html';

// import DateRangePicker from '../date-range-picker';
import calendarDates from './calendar-dates';
import calendarYears from './calendar-years';
import timePicker from '../date-time-picker/component';


const Datepicker = {
    selector: 'datepicker',
    bindings: {
        dateFormat: '@',
        dateMin: '<',
        dateMax: '<',
        disabled: '<',
        dateMode: '@',
        datepickerVisibility: '<',
        dateDisabledWeekdays: '@',
        showTodayButton: '@',
        showClearButton: '@'
    },
    require: {
        ngModel: '^ngModel'
    },
    controllerAs: 'vm',
    template: datepickerTpl,
    controller
};
export default angular.module('app.datepicker', [calendarDates, calendarYears])
    .component(Datepicker.selector, Datepicker)
    .component(timePicker.selector, timePicker)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('ngCalendar.html', calendarTpl);
    }])
    .name;
