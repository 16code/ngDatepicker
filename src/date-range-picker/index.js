import controller from './controller';
import template from './template.html';
const DaterangePicker = {
    selector: 'daterangePicker',
    bindings: {
        dateFormat: '@',
        dateMin: '<',
        dateMax: '<'
    },
    require: {
        ngModel: '^ngModel'
    },
    controllerAs: 'vm',
    template,
    controller
};
export default angular.module('app.dateRangePicker', [])
    .component(DaterangePicker.selector, DaterangePicker)
    .name;
