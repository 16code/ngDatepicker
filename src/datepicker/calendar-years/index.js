const template = require('./template.html');
import controller from './controller';
const calendarYears = {
    selector: 'calendarYears',
    bindings: {
        calendarDate: '<',
        yearsPanelOpened: '<',
        selectedDate: '<',
        disabledMinYear: '@',
        disabledMaxYear: '@',
        onSelectYear: '&'
    },
    controllerAs: 'vm',
    template,
    controller
};

export default angular.module('ngCalendarYears', [])
    .component(calendarYears.selector, calendarYears)
    .name;
