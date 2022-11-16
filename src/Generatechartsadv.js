"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var countup_js_1 = require("countup.js");
var Generatechartsadv = /** @class */ (function () {
    function Generatechartsadv() {
        // @ts-ignore
        this.chartCard = __spreadArray([], document.querySelectorAll(".chart-card"), true);
        this.update = false;
        this.setLoading = true;
    }
    Generatechartsadv.prototype.loading = function (loading, el) {
        this.setLoading = loading;
        el.classList.contains('loading') ? el.classList.remove('loading') : null;
    };
    Generatechartsadv.prototype.init = function (obj) {
        this.objAdv = obj;
        this.typedCard = this.chartCard.filter(function (elem) { return elem.dataset['type'] === obj.type; });
        this.iterateMainElement(this.typedCard);
    };
    Generatechartsadv.prototype.reload = function (obj) {
        this.update = true;
        this.init(obj);
    };
    Generatechartsadv.prototype.iterateMainElement = function (cards) {
        var _this = this;
        cards.forEach(function (el, index) {
            _this.header = el.querySelector('.chart-card__header');
            _this.loading(false, el);
            var status = _this.objAdv.percValues[_this.objAdv.percValues.length - 1] >= 0 && _this.objAdv.percValues[_this.objAdv.percValues.length - 1] < _this.objAdv.valueRangeColors[0] ? 'red' : _this.objAdv.percValues[_this.objAdv.percValues.length - 1] >= _this.objAdv.valueRangeColors[0] && _this.objAdv.percValues[_this.objAdv.percValues.length - 1] < _this.objAdv.valueRangeColors[1] ? 'orange' : 'green';
            if (_this.objAdv.format === 'type1') {
                _this.circle = el.querySelector('.circle-chart__circle');
                if (_this.header) {
                    _this.header.classList.contains('red') && _this.header.classList.remove('red');
                    _this.header.classList.contains('orange') && _this.header.classList.remove('orange');
                    _this.header.classList.contains('green') && _this.header.classList.remove('green');
                    _this.header.classList.add(status);
                }
                _this.circle.style['stroke-dasharray'] = "".concat(_this.objAdv.percValues[_this.objAdv.percValues.length - 1], " 100");
                var previousPercValue = document.getElementById("mainValuePerc-".concat(_this.objAdv.type, "-").concat(index));
                var value = "".concat(_this.objAdv.realValues[_this.objAdv.realValues.length - 1]).concat(_this.objAdv.valueLabels[_this.objAdv.valueLabels.length - 1]);
                if ((previousPercValue === null || previousPercValue === void 0 ? void 0 : previousPercValue.innerHTML) !== value) {
                    _this.percValue = new countup_js_1.CountUp("mainValuePerc-".concat(_this.objAdv.type, "-").concat(index), _this.objAdv.realValues[_this.objAdv.realValues.length - 1], {
                        suffix: _this.objAdv.valueLabels[_this.objAdv.valueLabels.length - 1]
                    });
                    if (_this.update) {
                        _this.percValue.update(_this.objAdv.realValues[_this.objAdv.realValues.length - 1]);
                    }
                    else {
                        _this.percValue.start();
                    }
                }
            }
            if (_this.objAdv.format === 'type2') {
                var rowType = document.querySelector("[data-type=".concat(_this.objAdv.type, "]"));
                var bullet_1 = rowType.querySelectorAll('.overlay__full');
                var valuePerc_1 = _this.objAdv.percValues[_this.objAdv.percValues.length - 1];
                _this.loading(false, rowType);
                bullet_1.forEach(function (el) {
                    el.style.background = "".concat(status);
                });
                if (valuePerc_1 > 0 && valuePerc_1 < 20) {
                    bullet_1[0].style.width = "".concat((valuePerc_1 / 2) * 10, "%");
                }
                if (valuePerc_1 >= 20 && valuePerc_1 < 40) {
                    bullet_1[0].style.width = '100%';
                    setTimeout(function () {
                        bullet_1[1].style.width = "".concat(((valuePerc_1 - 20) / 2) * 10, "%");
                    }, 200);
                }
                if (valuePerc_1 >= 40 && valuePerc_1 < 60) {
                    bullet_1[0].style.width = "100%";
                    setTimeout(function () {
                        bullet_1[1].style.width = "100%";
                    }, 200);
                    setTimeout(function () {
                        bullet_1[2].style.width = "".concat(((valuePerc_1 - 40) / 2) * 10, "%");
                    }, 400);
                }
                if (valuePerc_1 >= 60 && valuePerc_1 < 80) {
                    bullet_1[0].style.width = "100%";
                    setTimeout(function () {
                        bullet_1[1].style.width = "100%";
                    }, 200);
                    setTimeout(function () {
                        bullet_1[2].style.width = "100%";
                    }, 400);
                    setTimeout(function () {
                        bullet_1[3].style.width = "".concat(((valuePerc_1 - 60) / 2) * 10, "%");
                    }, 600);
                }
                if (valuePerc_1 >= 80) {
                    bullet_1[0].style.width = "100%";
                    setTimeout(function () {
                        bullet_1[1].style.width = "100%";
                    }, 200);
                    setTimeout(function () {
                        bullet_1[2].style.width = "100%";
                    }, 400);
                    setTimeout(function () {
                        bullet_1[3].style.width = "100%";
                    }, 600);
                    setTimeout(function () {
                        bullet_1[4].style.width = "".concat(((valuePerc_1 - 80) / 2) * 10, "%");
                    }, 800);
                }
                // bul.style.background = status 
                // bul.style.width = `${this.objAdv.percValues[this.objAdv.percValues.length - 1]}%` 
                var titlePercValue = new countup_js_1.CountUp("perc-title-".concat(_this.objAdv.type), _this.objAdv.realValues[_this.objAdv.realValues.length - 1], {
                    suffix: _this.objAdv.valueLabels[_this.objAdv.realValues.length - 1]
                });
                titlePercValue.start();
            }
            _this.contentRow = __spreadArray([], el.querySelectorAll('.content__row'), true);
            _this.iterateRow(_this.contentRow, index);
            el.classList.add('active');
        });
    };
    Generatechartsadv.prototype.iterateRow = function (contentRow, index) {
        var _this = this;
        contentRow.forEach(function (row, indexRow) {
            var status = _this.objAdv.percValues[indexRow] >= 0 && _this.objAdv.percValues[indexRow] < _this.objAdv.valueRangeColors[0] ? 'red' : _this.objAdv.percValues[indexRow] >= _this.objAdv.valueRangeColors[0] && _this.objAdv.percValues[indexRow] < _this.objAdv.valueRangeColors[1] ? 'orange' : 'green';
            if (_this.objAdv.format === 'type1') {
                _this.barContent = row.querySelector('.bar__content');
                if (_this.barContent) {
                    _this.barContent.classList.contains('red') && _this.barContent.classList.remove('red');
                    _this.barContent.classList.contains('orange') && _this.barContent.classList.remove('orange');
                    _this.barContent.classList.contains('green') && _this.barContent.classList.remove('green');
                    _this.barContent.classList.add(status);
                    _this.barContent.style.width = "".concat(_this.objAdv.percValues[indexRow], "%");
                }
            }
            if (_this.objAdv.format === 'type2') {
                var circleResult = row.querySelectorAll('.circle-chart__circle');
                circleResult.forEach(function (circle) {
                    // @ts-ignore
                    circle.style['stroke'] = "".concat(status);
                    // @ts-ignore
                    circle.style['stroke-dasharray'] = "".concat(_this.objAdv.percValues[indexRow], " 100");
                });
            }
            var previousValue = document.getElementById("perc-value-".concat(_this.objAdv.type, "-").concat(index, "-row-").concat(indexRow));
            if ((previousValue === null || previousValue === void 0 ? void 0 : previousValue.innerHTML) !== "".concat(_this.objAdv.realValues[indexRow]).concat(_this.objAdv.valueLabels[indexRow])) {
                _this.percValueText = new countup_js_1.CountUp("perc-value-".concat(_this.objAdv.type, "-").concat(index, "-row-").concat(indexRow), _this.objAdv.realValues[indexRow], {
                    suffix: _this.objAdv.valueLabels[indexRow]
                });
                if (_this.update) {
                    _this.percValueText.update(_this.objAdv.realValues[indexRow]);
                }
                else {
                    _this.percValueText.start();
                }
            }
            _this.textValue = document.getElementById("perc-value-".concat(_this.objAdv.type, "-").concat(index, "-row-").concat(indexRow));
            if (_this.textValue) {
                _this.textValue.classList.contains('red-text') && _this.textValue.classList.remove('red-text');
                _this.textValue.classList.contains('orange-text') && _this.textValue.classList.remove('orange-text');
                _this.textValue.classList.contains('green-text') && _this.textValue.classList.remove('green-text');
                _this.textValue.classList.add("".concat(status, "-text"));
            }
        });
    };
    return Generatechartsadv;
}());
// @ts-ignore
globalThis.Generatechartsadv = Generatechartsadv;
exports["default"] = Generatechartsadv;
