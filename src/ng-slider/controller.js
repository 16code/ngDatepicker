export default class controller {
    constructor($scope, $element, $attrs, $timeout) {
        'ngInject';
        Object.assign(this, {
            $scope,
            $element,
            $attrs,
            $timeout
        });
        this.isClick = false;
        this.sliderSize = 1;
        this.currentX = 0;
        this.currentY = 0;
        this.newPosition = null;

        this.onDragging = this.onDragging.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.setPosition = this.setPosition.bind(this);
    }
    $onInit() {
        this.vertical = typeof this.$attrs.vertical !== 'undefined';
        this.start = +this.startNumber || 0;
        this.end = +this.endNumber || 59;
        this.min = +this.min < this.start ? this.start : +this.min || this.start;
        this.max = +this.max > this.end ? this.end : +this.max || this.end;
        this.step = +this.step || 1;
        this.value = this.min > 0 ? this.min : +this.value || 0;
        this.oldValue = this.value;
        this.updateSliderSize();
    }
    updateSliderSize() {
        const ele = this.$element[0];
        const sliderEle = ele.querySelector('.ng-slider-box');

        const untimer = this.$timeout(() => {
            this.$timeout.cancel(untimer);
            const rect = sliderEle.getBoundingClientRect();
            this.sliderSize = this.vertical ? rect.height : rect.width;
        });
    }
    onMouseDown($event) {
        $event.preventDefault();
        this.onDragStart($event);
        window.addEventListener('mousemove', this.onDragging);
        window.addEventListener('mouseup', this.onDragEnd);
        window.addEventListener('contextmenu', this.onDragEnd);
    }
    get currentPosition() {
        return `${(this.value - this.start) / (this.end - this.start) * 100}%`; // eslint-disable-line
    }
    onDragStart(event) {
        this.dragging = true;
        this.isClick = true;
        if (this.vertical) {
            this.startY = event.clientY;
        } else {
            this.startX = event.clientX;
        }
        this.startPosition = parseFloat(this.currentPosition);
        this.newPosition = this.startPosition;
    }
    onDragging(event) {
        if (this.dragging) {
            this.isClick = false;
            let diff = 0;
            if (this.vertical) {
                this.currentY = event.clientY;
                diff = ((this.startY - this.currentY) / this.sliderSize) * 100;
            } else {
                this.currentX = event.clientX;
                diff = ((this.currentX - this.startX) / this.sliderSize) * 100;
            }
            this.newPosition = this.startPosition + diff;
            this.setPosition(this.newPosition);
        }
    }
    onDragEnd() {
        if (this.dragging) {
            this.$timeout(() => {
                this.dragging = false;
                if (!this.isClick) {
                    this.setPosition(this.newPosition);
                }
            }, 0);
            window.removeEventListener('mousemove', this.onDragging);
            window.removeEventListener('mouseup', this.onDragEnd);
            window.removeEventListener('contextmenu', this.onDragEnd);
        }
    }
    get precision() {
        const precisions = [this.start, this.end, this.step].map(item => {
            const decimal = (`${item}`).split('.')[1];
            return decimal ? decimal.length : 0;
        });
        return Math.max.apply(null, precisions);
    }
    wrapperStyle() {
        return this.vertical ? {bottom: this.currentPosition} : {left: this.currentPosition};
    }
    get barSize() {
        const v = this.min > 0 ? (this.value - this.start - this.min) : this.value - this.start;
        const c = `${(v / (this.end - this.start)) * 100}%`;
        const a = parseFloat(c).toFixed(this.precision);
        return `${a}%`;
    }
    barStyle() {
        const v = ((this.min - this.start) / (this.end - this.start)) * 100;
        const l = this.min > 0 ? `${v}%` : '0%';
        return this.vertical ? {
            bottom: l,
            height: this.barSize
        } : {
            left: l,
            width: this.barSize
        };
    }
    setPosition(newPosition) {
        if (newPosition === null) return;
        if (newPosition < 0) {
            newPosition = 0;
        } else if (newPosition > 100) {
            newPosition = 100;
        }
        const lengthPerStep = 100 / ((this.end - this.start) / this.step);
        const steps = Math.round(newPosition / lengthPerStep);
        let value = steps * lengthPerStep * (this.end - this.start) * 0.01 + this.start; // eslint-disable-line
        if (value >= this.max) {
            value = this.max;
        }
        if (value <= this.min) {
            value = this.min;
        }
        const untimer = this.$timeout(() => {
            this.$timeout.cancel(untimer);
            this.value = parseFloat(value.toFixed(this.precision));
            this.onChange();
        }, 0);
        if (!this.dragging && this.value !== this.oldValue) {
            this.oldValue = this.value;
        }
    }
}
