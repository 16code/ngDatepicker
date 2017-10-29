import template from './template.html';
import controller from './controller';
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

export default angular.module('datepicker.calendarDates', [])
    .component(calendarDates.selector, calendarDates)
    .name;
