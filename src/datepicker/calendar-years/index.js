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

export default angular.module('datepicker.calendarYears', [])
    .component(calendarYears.selector, calendarYears)
    .name;
