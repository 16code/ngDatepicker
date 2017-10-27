import './datepicker';
class ctrl {
    constructor($timeout) {
        'ngInject';
        this.datedisabledweekdays = [];
        this.defaultDate = '2017-10-29';


        // this.benginDate = '2017-10-19';
        // this.endDate = '2017-11-24';
        const timer = $timeout(() => {
            $timeout.cancel(timer);
        }, 5000);
        this.visibility = false;
        this.disabled = false;
    }
    toggleVisibility($event) {
        $event.stopPropagation();
        this.visibility = !this.visibility;
    }
}
export default angular.module('myApp', ['app.datepicker'])
    .controller('TestCtrl', ctrl)
    .name;
