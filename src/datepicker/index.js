const datepickerTpl = require('./tpls/datepicker.html');

import ngCalendarDates from './calendar-dates/index';
import ngCalendarYears from './calendar-years/index';
import ngTimePicker from './calendar-time-picker/component';
import controller from './controller';


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
export default angular.module('ngDatepicker', [ngCalendarDates, ngCalendarYears])
    .component(Datepicker.selector, Datepicker)
    .component(ngTimePicker.selector, ngTimePicker)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('ngCalendar.html', require('./tpls/calendar.html'));
    }])
    .name;
