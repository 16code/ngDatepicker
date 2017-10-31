import controller from './controller';
const template = require('./template.html');
const calendarDates = {
    selector: 'calendarDates',
    bindings: {
        dates: '<',
        selectedDate: '<',
        dateFormat: '@',
        onClickDate: '&'
    },
    controllerAs: 'vm',
    template,
    controller
};

export default angular.module('ngCalendarDates', [])
    .component(calendarDates.selector, calendarDates)
    .name;
