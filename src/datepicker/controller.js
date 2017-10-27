// import moment from 'moment';
const WEEK_OF_ROW = 7;
const DATE_COLUMNS = 6;
const ALL_DAY_OF_PANEL = WEEK_OF_ROW * DATE_COLUMNS;
let DATE_FORMAT = 'YYYY-MM-DD';
const TODAY = moment(new Date(), DATE_FORMAT);
export default class controller {
    constructor($scope, $element, $attrs, $uibPosition, $compile, $timeout, $window, $templateCache, $locale) {
        'ngInject';
        Object.assign(this, {$scope, $element, $attrs, $uibPosition, $compile, $timeout, $window, $templateCache});
        const {SHORTDAY, MONTH} = $locale.DATETIME_FORMATS;
        this.SHORTDAY = SHORTDAY.map(day => day.replace('周', ''));
        this.SHORTMONTH = MONTH;
        this.DATE_COLUMNS = Array.from({length: DATE_COLUMNS}).map((d, i) => i + 1);
        this.hideCalendar = this.hideCalendar.bind(this);
        this.windowResizeEvent = this.windowResizeEvent.bind(this);
    }
    $onInit() {
        const validateDate = this.__validateDate;
        const element = this.$element[0];
        DATE_FORMAT = this.dateFormat || DATE_FORMAT;
        this.input = angular.element(element.querySelector('.calendar-picker-input'));
        this.calendarIsOpend = false;
        this.dateDisabledWeekdays = this.$scope.$eval(this.dateDisabledWeekdays);
        this.ngModel.$render = () => {
            this.DATE = validateDate(this.ngModel.$viewValue) ? moment(this.ngModel.$viewValue, DATE_FORMAT) : moment();
            if (this.ngModel.$viewValue) {
                this.selectedDate = this.ngModel.$viewValue;
            }
            this.updateDatePanel(this.DATE);
        };
        // this.createOverlay();
        this.bindAttributes(this.input[0]);
        this.bindEvents();
    }
    $onChanges(changesObj) {
        const validateDate = this.__validateDate;
        const {dateMin, dateMax, datepickerVisibility} = changesObj;

        const canUpdate = (dateMin && dateMin.currentValue !== dateMin.previousValue) ||
            (dateMax && dateMax.currentValue !== dateMax.previousValue);
        if (canUpdate && validateDate(this.DATE)) {
            this.updateDatePanel(this.DATE);
        }
        if (datepickerVisibility) {
            if (datepickerVisibility.currentValue) {
                this.showCalendar();
            } else {
                this.hideCalendar();
            }
        }
    }
    // 设置日期
    handleSetDate(aDate, week) {
        const {prev, next} = week;
        if (prev || next) return;
        this.selectedDate = moment(aDate, DATE_FORMAT).startOf('date').format(DATE_FORMAT);
        this.ngModel.$setViewValue(this.selectedDate);
        this.yearsPanelOpened = false;
        this.hideCalendar();
    }
    // 清除日期
    handleClearDate() {
        if (this.selectedDate) {
            this.selectedDate = null;
            this.ngModel.$setViewValue(this.selectedDate);
            this.updateDatePanel(this.DATE);
        }
        this.hideCalendar();
    }
    // 选择今天
    handlePickerToday() {
        this.selectedDate = moment(TODAY, DATE_FORMAT).startOf('date').format(DATE_FORMAT);
        this.ngModel.$setViewValue(this.selectedDate);
        this.hideCalendar();
    }
    // 展开年份
    handleToggleYearPanel() {
        if (!this.years) {
            this.years = this.yearsGenerator(this.selectedDate || this.DATE);
        }
        this.yearsPanelOpened = !this.yearsPanelOpened;
    }
    // 选择年份
    handlePickerYear(y) {
        const beforeYear = moment(this.DATE).get('year');
        if (beforeYear === y) {
            this.handleToggleYearPanel();
            return;
        }
        this.DATE = moment(this.DATE).set('year', y);
        this.updateDatePanel(this.DATE);
        this.handleToggleYearPanel();
        this.years = this.yearsGenerator(this.selectedDate);
    }
    // 验证是不是今天
    handleIsToday(d) {
        return moment(d, DATE_FORMAT).isSame(TODAY, 'day');
    }
    // 高亮已选择的时间
    handleIsSelectedDate(d) {
        const a = moment(d, DATE_FORMAT);
        const b = moment(this.selectedDate, DATE_FORMAT);
        return a.isSame(b, 'day');
    }
    // 切换月份
    hanleChangeMonth(t) {
        if (t === 'next') {
            this.DATE = moment(this.DATE, DATE_FORMAT).add(1, 'months');
        } else {
            this.DATE = moment(this.DATE, DATE_FORMAT).subtract(1, 'months');
        }
        this.updateDatePanel(this.DATE);
    }
    // 获取一月的日期
    getDaysInMonth(d) {
        const validateDate = this.__validateDate;
        if (validateDate(this.dateMin)) {
            const theDate = moment(this.dateMin, DATE_FORMAT).startOf('date');
            this.disabledMinDate = theDate.valueOf();
            this.disabledMinYear = theDate.get('year');
        }
        if (validateDate(this.dateMax)) {
            const theDate = moment(this.dateMax, DATE_FORMAT).startOf('date');
            this.disabledMaxDate = theDate.valueOf();
            this.disabledMaxYear = theDate.get('year');
        }
        const disabledWeekdays = this.dateDisabledWeekdays;
        const canDisabledWeekdays = disabledWeekdays && disabledWeekdays.length;
        return Array.from({length: moment(d).daysInMonth()}).map((t, i) => {
            const day = i + 1;
            const theDate = moment(d).set('date', day).startOf('date');
            const date = theDate.format(DATE_FORMAT);
            const value = theDate.valueOf();
            const weekday = theDate.isoWeekday();
            const disabledMin = this.dateMin && value <= this.disabledMinDate;
            const disabledMax = this.dateMax && value >= this.disabledMaxDate;
            const isToday = this.handleIsToday(date);
            const disabledWeeekDays = canDisabledWeekdays && disabledWeekdays.includes(weekday);
            return {
                date,
                disabled: disabledMin || disabledMax || disabledWeeekDays,
                value,
                isToday,
                day
            };
        });
    }
    // 获取填充日期
    daysGenerator(d) {
        const result = [];
        const daysInMonth = this.getDaysInMonth(d);
        const firstDayOfMonth = this.getFirstDayOfMonth(d);
        const daysInPrevMonth = this.getDaysInPrevMonth(d);
        if (firstDayOfMonth !== 7) {
            let p = daysInPrevMonth - firstDayOfMonth;
            while (p < daysInPrevMonth) {
                const day = ++p;
                const theDate = moment(d).subtract(1, 'months').set('date', day).startOf('date');
                result.push({
                    date: theDate.format(DATE_FORMAT),
                    value: theDate.valueOf(),
                    prev: true,
                    day
                });
            }
        }
        result.push(...daysInMonth);
        let n = 0;
        const len = ALL_DAY_OF_PANEL - result.length;
        while (n <= len) {
            const day = ++n;
            const theDate = moment(d).add(1, 'months').set('date', day).startOf('date');
            result.push({
                date: theDate.format(DATE_FORMAT),
                value: theDate.valueOf(),
                next: true,
                day
            });
        }
        return result;
    }
    // 日期按周分组
    daysOfWeeks(column) {
        this.daysInMonth = this.daysInMonth || [];
        const sliceForm = (column - 1) * WEEK_OF_ROW;
        return this.daysInMonth.slice(sliceForm * 1, sliceForm + WEEK_OF_ROW);
    }
    // 获取上一月多有多少天
    getDaysInPrevMonth(d) {
        return moment(d).subtract(1, 'months').daysInMonth();
    }
    // 获取第一天是周几
    getFirstDayOfMonth(d) {
        return moment(d).set('date', 1).get('day');
    }
    handleActiveYear(y) {
        const currentYear = moment(this.DATE).get('year');
        return currentYear === y;
    }
    // 更新年份
    yearsGenerator(d) {
        const daysToPrepend = 7;
        const daysToAppend = 8;
        const theNewYears = [];
        const currentYear = moment(d).get('year');
        for (let i = daysToPrepend; i > 0; i -= 1) {
            theNewYears.push(+currentYear - i);
        }
        for (let i = 0; i < daysToAppend; i += 1) {
            theNewYears.push(+currentYear + i);
        }
        return theNewYears;
    }
    // 是否隐藏上一月按钮
    hiddenMonthBtn(type) {
        const currentDate = moment(this.DATE, 'YYYY-MM');
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
    createOverlay() {
        let overlay = document.querySelector('.overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.classList.add('overlay');
            document.body.appendChild(overlay);
        }
        this.overlay = overlay;
    }
    createCalendar() {
        return new Promise((resolve) => {
            if (!this.calendar) {
                const template = this.$templateCache.get('ngCalendar.html');
                const theCalendar = angular.element(template);
                const compiled = this.$compile(theCalendar);
                angular.element(document.body).append(theCalendar);
                compiled(this.$scope);
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
    windowResizeEvent() {
        if (this.calendarIsOpend && this.calendar) {
            this.calendarPosition();
        }
    }
    bindEvents() {
        this.input.on('focus click', (event) => {
            event.stopPropagation();
            this.createCalendar()
            .then(() => { this.showCalendar(); });
        });
        angular.element(this.$window).on('click', this.hideCalendar);
    }
    hiddenOtherCalendar() {
        const ngCalendar = document.querySelectorAll('.ng-calendar');
        if (ngCalendar.length) {
            Array.prototype.forEach.call(ngCalendar, (elment) => {
                elment.style.display = 'none';
            });
        }
    }
    calendarPosition() {
        const position = this.$uibPosition.positionElements(this.input,
            this.calendar, 'bottom-left', true);
        this.setStylesOnElement(this.calendar, {
            position: 'absolute',
            display: 'block',
            left: `${position.left}px`,
            top: `${position.top + 6}px`
        });
    }
    showCalendar() {
        this.hiddenOtherCalendar();
        if (this.calendar) {
            this.calendarIsOpend = true;
            this.calendarPosition();
            angular.element(this.$window).on('resize', this.windowResizeEvent);
        } else {
            this.createCalendar()
            .then(() => { this.showCalendar(); });
        }
    }
    hideCalendar() {
        this.calendarIsOpend = false;
        this.setStylesOnElement(this.calendar, {
            display: 'none'
        });
        angular.element(this.$window).off('resize', this.windowResizeEvent);
    }
    __validateDate(d) {
        return moment(d, DATE_FORMAT).isValid();
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
    $onDestroy() {
        angular.element(this.$window).off('resize', this.windowResizeEvent);
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
