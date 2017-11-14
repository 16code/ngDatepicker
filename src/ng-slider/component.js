import template from './template.html';
import controller from './controller';
const Component = {
    selector: 'ngSlider',
    bindings: {
        startNumber: '@',
        endNumber: '@',
        max: '<',
        min: '<',
        value: '=?',
        step: '@',
        onChange: '&'
    },
    template,
    controller,
    controllerAs: 'vm'
};
export default Component;
