const datepickerTpl = require('./tpls/datepicker.html');
import ngSlider from '../ng-slider';
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
export default angular.module('ngDatepicker', [ngCalendarDates, ngCalendarYears, ngSlider])
    .component(Datepicker.selector, Datepicker)
    .component(ngTimePicker.selector, ngTimePicker)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('ngCalendar.html', require('./tpls/calendar.html'));
    }])
    .name;
