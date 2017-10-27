class Controller {
    constructor($scope) {
        'ngInject';
        Object.assign(this, {$scope});
        this.datepickerVisible = false;
    }
    $onInit() {
        this.rangeStartDate = moment(new Date(), 'YYYY-MM');
        this.rangeEndDate = moment().add(1, 'months').format('YYYY-MM');
        console.info(this.rangeEndDate);
        // this.unwarcher = this.$scope.$watch(() => this.rangeStartDate, (newVal) => {
        //     if (newVal) {
        //         console.info(newVal);
        //         this.rangeDateMax = moment(newVal, 'YYYY-MM').add(1, 'months');
        //     }
        // });

        // this.unwarcher2 = this.$scope.$watch(() => this.rangeEndDate, (newVal) => {
        //     if (newVal) {
        //         this.rangeDateMin = moment(newVal, 'YYYY-MM').subtract(1, 'months');
        //         console.info(newVal);
        //     }
        // });
    }
    togglVisible() {
        this.datepickerVisible = !this.datepickerVisible;
    }
}
export default Controller;
