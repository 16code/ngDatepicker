import './datepicker';
class ctrl {
    constructor($timeout) {
        'ngInject';
        this.datedisabledweekdays = [];
        this.defaultDate = new Date();


        // this.benginDate = '2017-10-19';
        // this.endDate = '2017-11-24';
        const timer = $timeout(() => {
            $timeout.cancel(timer);
        }, 5000);
        this.visibility = false;
        this.disabled = false;
        this.range = 18;
    }
    toggleVisibility($event) {
        $event.stopPropagation();
        this.visibility = !this.visibility;
    }
    testRange(n) {
        n = +n || 0;

        return `四舍五入: ${Math.round(n)}, 向上取整: ${Math.ceil(n)}, 向下取整 ${Math.floor(n)}`;
    }
}
export default angular.module('myApp', ['app.datepicker'])
    .controller('TestCtrl', ctrl)
    .name;
