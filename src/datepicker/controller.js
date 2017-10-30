import {Helper, DATE_COLUMNS} from '../helper/helper';
const TODAY = moment(new Date(), 'YYYY-MM-DD').startOf('date');
export default class controller {
    constructor($scope, $element, $attrs, $compile, $timeout, $window, $templateCache, $locale) {
        'ngInject';
        Object.assign(this, {$scope, $element, $attrs, $compile, $timeout, $window, $templateCache});
        const {SHORTDAY, MONTH} = $locale.DATETIME_FORMATS;
        this.SHORTDAY = SHORTDAY;
        this.SHORTMONTH = MONTH;
        this.DATE_COLUMNS = Array.from({length: DATE_COLUMNS}).map((d, i) => i + 1);
        this.DATE_FORMAT = this.dateFormat || 'YYYY-MM-DD';
        this.hideCalendar = this.hideCalendar.bind(this);
    }
    $onInit() {
        const validateDate = Helper.validateDate;
        const element = this.$element[0];
        this.input = angular.element(element.querySelector('.calendar-picker-input'));
        this.calendarIsOpend = false;
        if (this.$attrs.timePicker === 'true') this.timePicker = true;
        this.dateDisabledWeekdays = this.$scope.$eval(this.dateDisabledWeekdays);
        this.ngModel.$render = () => {
            this.CALENDAR_DATE = validateDate(this.ngModel.$viewValue, this.DATE_FORMAT)
                ? moment(this.ngModel.$viewValue, this.DATE_FORMAT) : moment();
            if (this.ngModel.$viewValue && validateDate(this.ngModel.$viewValue, this.DATE_FORMAT)) {
                this.ngModelDate = moment(this.ngModel.$viewValue, this.DATE_FORMAT).format(this.DATE_FORMAT);
            }
            this.updateDatePanel(this.CALENDAR_DATE);
        };
        this.bindAttributes(this.input[0]);
        this.bindEvents();
    }
    $onChanges(changesObj) {
        const validateDate = Helper.validateDate;
        const {dateMin, dateMax, datepickerVisibility} = changesObj;

        const canUpdate = (dateMin && dateMin.currentValue !== dateMin.previousValue) ||
            (dateMax && dateMax.currentValue !== dateMax.previousValue);
        if (canUpdate && validateDate(this.CALENDAR_DATE, this.DATE_FORMAT)) {
            this.updateDatePanel(this.CALENDAR_DATE);
        }
        if (datepickerVisibility && datepickerVisibility.currentValue) {
            this.showCalendar();
        }
    }
    // 设置日期
    handleSetDate(aDate) {
        const {prev, next, day} = aDate;
        if (prev || next) return;
        this.CALENDAR_DATE = this.CALENDAR_DATE.set('date', day);
        this.ngModelDate = this.CALENDAR_DATE.clone().format(this.DATE_FORMAT);
        this.ngModel.$setViewValue(this.ngModelDate);
        this.yearsPanelOpened = false;
        if (!this.timePicker) {
            this.hideCalendar();
        }
    }
    // 时间更新
    handleTimeOnChange(time) {
        const {hour, minute} = time;
        this.CALENDAR_DATE = this.CALENDAR_DATE.set({hour, minute});
        this.ngModelDate = this.CALENDAR_DATE.clone().format(this.DATE_FORMAT);
        this.ngModel.$setViewValue(this.ngModelDate);
    }
    // 清除日期
    handleClearDate() {
        if (this.ngModelDate) {
            this.ngModelDate = null;
            this.ngModel.$setViewValue(this.ngModelDate);
            this.updateDatePanel(this.CALENDAR_DATE);
        }
    }
    // 展开年份
    handleToggleYearPanel() {
        this.yearsPanelOpened = !this.yearsPanelOpened;
    }
    // 选择年份
    handlePickerYear(y) {
        const beforeYear = this.CALENDAR_DATE.get('year');
        if (beforeYear === y) {
            this.handleToggleYearPanel();
            return;
        }
        this.CALENDAR_DATE = this.CALENDAR_DATE.set('year', y);
        this.updateDatePanel(this.CALENDAR_DATE);
        this.handleToggleYearPanel();
    }
    // 切换月份
    hanleChangeMonth(t) {
        if (t === 'next') {
            this.CALENDAR_DATE = this.CALENDAR_DATE.add(1, 'months');
        } else {
            this.CALENDAR_DATE = this.CALENDAR_DATE.subtract(1, 'months');
        }
        this.updateDatePanel(this.CALENDAR_DATE);
    }
    // 获取填充日期
    daysGenerator(d) {
        const validateDate = Helper.validateDate;
        if (validateDate(this.dateMin, this.DATE_FORMAT)) {
            const theDate = moment(this.dateMin, this.DATE_FORMAT).startOf('date');
            this.disabledMinDate = theDate.valueOf();
            this.disabledMinYear = theDate.get('year');
            this.disabledTodayBtn = this.disabledMinDate >= TODAY.valueOf();
        }
        if (validateDate(this.dateMax, this.DATE_FORMAT)) {
            const theDate = moment(this.dateMax, this.DATE_FORMAT).startOf('date');
            this.disabledMaxDate = theDate.valueOf();
            this.disabledMaxYear = theDate.get('year');
        }
        const disabledWeekdays = this.dateDisabledWeekdays;
        const canDisabledWeekdays = disabledWeekdays && disabledWeekdays.length;

        return Helper.daysGenerator({
            d,
            DATE_FORMAT: this.DATE_FORMAT,
            dateMax: this.dateMax,
            dateMin: this.dateMin,
            disabledMinDate: this.disabledMinDate,
            disabledMaxDate: this.disabledMaxDate,
            canDisabledWeekdays,
            disabledWeekdays
        });
    }

    // 是否隐藏上一月按钮
    hiddenMonthBtn(type) {
        const currentDate = moment(this.CALENDAR_DATE, 'YYYY-MM');
        if (type === 'prev') {
            if (this.dateMin) {
                const dateMin = moment(this.dateMin, 'YYYY-MM');
                const diff = moment(currentDate).isSame(dateMin, 'month');
                return diff;
            }
        }
        if (type === 'next') {
            if (this.dateMax) {
                const dateMax = moment(this.dateMax, 'YYYY-MM');
                const diff = moment(currentDate).isSame(dateMax, 'month');
                return diff;
            }
        }
        return false;
    }
    // 更新视图
    updateDatePanel(d) {
        const days = this.daysGenerator(d);
        this.daysInMonth = days;
        this.headerDate = moment(d).valueOf();
    }
    setStylesOnElement(element, styles) {
        if (!element) return;
        Object.assign(element.style, styles);
    }
    createCalendar() {
        return new Promise((resolve) => {
            if (!this.calendar) {
                const template = this.$templateCache.get('ngCalendar.html');
                const theCalendar = angular.element(template);
                const compiled = this.$compile(theCalendar);
                compiled(this.$scope);
                angular.element(this.$element).append(theCalendar);
                this.calendar = angular.element(theCalendar)[0];
                this.calendar.id = `ng-calendar-${new Date().getTime()}`;
                angular.element(this.calendar).on('click', (event) => event.stopPropagation());
                const timer = this.$timeout(() => {
                    this.$timeout.cancel(timer);
                    resolve();
                }, 100);
            } else {
                resolve();
            }
        });
    }
    bindEvents() {
        this.input.on('focus click', (event) => {
            event.stopPropagation();
            this.createCalendar()
                .then(() => {
                    this.showCalendar();
                    angular.element(this.$window).on('click', this.hideCalendar);
                });
        });
    }
    showCalendar() {
        if (this.calendar) {
            this.calendarIsOpend = true;
            this.calendarPosition();
        } else {
            this.createCalendar()
            .then(() => { this.showCalendar(); });
        }
    }
    hideCalendar() {
        this.calendarIsOpend = false;
        this.yearsPanelOpened = false;
        angular.element(this.$window).off('click', this.hideCalendar);
        const timer = this.$timeout(() => {
            this.$timeout.cancel(timer);
            if (this.ngModelDate) {
                const a = moment(this.ngModelDate, this.DATE_FORMAT);
                const b = moment(this.CALENDAR_DATE, this.DATE_FORMAT);
                if (!a.isSame(b, 'day')) {
                    this.CALENDAR_DATE = a.clone();
                    this.updateDatePanel(this.ngModelDate);
                }
            }
        });
        this.calendar.classList.remove('active-calendar');
    }
    hiddenOtherCalendar() {
        const ngCalendar = document.querySelectorAll('.active-calendar');
        if (ngCalendar.length) {
            Array.prototype.forEach.call(ngCalendar, (elment) => {
                elment.classList.remove('active-calendar');
            });
        }
    }
    bindAttributes(ele) {
        if (ele) {
            const allowedAttrs = ['placeholder', 'required'];
            Object.keys(this.$attrs).forEach(key => {
                if (allowedAttrs.includes(key)) {
                    ele.setAttribute(key, this.$attrs[key]);
                }
            });
        }
    }
    calendarPosition() {
        this.hiddenOtherCalendar();
        this.calendar.classList.add('active-calendar');
    }
    $onDestroy() {
        angular.element(this.$window).off('click', this.hideCalendar);
        if (this.calendar) {
            this.calendar.parentNode.removeChild(this.calendar);
            this.calendar = null;
        }
    }
    get selectedMonthFormat() {
        return this.SHORTMONTH[moment(this.headerDate).format('M') - 1];
    }
}
