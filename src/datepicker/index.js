import './style.less';
import './uib.position';
import controller from './controller';
import datepickerTpl from './tpls/datepicker.html';
import calendarTpl from './tpls/calendar.html';
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
export default angular.module('app.datepicker', ['ui.bootstrap.position'])
    .component(Datepicker.selector, Datepicker)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('ngCalendar.html', calendarTpl);
    }])
    .name;
