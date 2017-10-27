import './style.less';
import './uib.position';
import controller from './controller';
import datepickerTpl from './tpls/datepicker.html';
import calendarTpl from './tpls/calendar.html';
const Component = {
    selector: 'datepicker',
    bindings: {
        dateFormat: '@',
        dateMin: '<',
        dateMax: '<',
        datepickerVisibility: '<',
        disabled: '<',
        dateDisabledWeekdays: '@',
        // placeholder: '@',
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
    .component(Component.selector, Component)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('ngCalendar.html', calendarTpl);
    }])
    .name;
