import template from './template.html';
import './style.less';
class controller {
    $onInit() {
        this.selectedDate = this.selectedDate || new Date();
        this.hour = moment(this.selectedDate).get('hour');
        this.minute = moment(this.selectedDate).get('minute');
        this.dateTransform();
    }
    hanldeTimeChange(t, v) {
        const s = t === 'HH' ? 'hour' : 'minute';
        this.selectedDate = moment(this.selectedDate).set(s, v);
        this.dateTransform();
    }
    dateTransform() {
        this.selectedDateString = moment(this.selectedDate).format('HH:mm');
    }
}
const TimePicker = {
    selector: 'timePicker',
    bindings: {
        selectedDate: '<'
    },
    controllerAs: 'vm',
    template,
    controller
};
export default TimePicker;
