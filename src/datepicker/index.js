import controller from './controller';
const datepickerTpl = require('./tpls/datepicker.html');
const calendarTpl = require('./tpls/calendar.html');

// import DateRangePicker from '../date-range-picker';
import calendarDates from './calendar-dates/index';
import calendarYears from './calendar-years/index';
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
        allowClear: '@'
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
