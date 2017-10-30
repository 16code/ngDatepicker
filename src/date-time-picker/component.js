const template = require('./template.html');

class controller {
    $onInit() {
        this.dateFormat = this.dateFormat || 'YYYY-MM-DD HH:mm';
        this.selectedDate = moment((this.selectedDate || new Date()), this.dateFormat);
        this.hour = this.getTime('hour', this.selectedDate);
        this.minute = this.getTime('minute', this.selectedDate);
    }
    $onChanges(changes) {
        const {selectedDate} = changes;
        if (selectedDate && (selectedDate.currentValue !== selectedDate.previousValue)) {
            if (!moment(selectedDate.currentValue, 'YYYY-MM-DD')
                .isSame(moment(selectedDate.previousValue, 'YYYY-MM-DD'))) {
                this.updateTime();
            }
        }
    }
    updateTime() {
        const canDisableTime = this.canDisableTimeMin();
        if (canDisableTime) {
            this.hourMin = this.getTime('hour', this.dateMin);
            this.minuteMin = this.getTime('minute', this.dateMin);
            this.hour = this.hourMin;
            this.minute = this.minuteMin;
            this.hanldeTimeChange();
        } else {
            this.hourMin = 0;
            this.minuteMin = 0;
        }
    }
    hanldeTimeChange() {
        this.onChange({
            hour: this.hour,
            minute: this.minute
        });
    }
    getTime(t, d) {
        return moment(d, this.dateFormat).get(t);
    }
    dateTransform(n) {
        n = +n || 0;
        return n < 10 ? `0${n}` : n;
    }
    canDisableTimeMin() {
        if (this.dateMin) {
            const selected = moment(this.selectedDate, this.dateFormat);
            const dateMin = moment(this.dateMin, this.dateFormat);
            return moment(selected).isSame(dateMin, 'day');
        }
        return false;
    }
}
const TimePicker = {
    selector: 'timePicker',
    bindings: {
        dateFormat: '@',
        selectedDate: '<',
        onChange: '&',
        dateMin: '<'
    },
    controllerAs: 'vm',
    template,
    controller
};
export default TimePicker;
