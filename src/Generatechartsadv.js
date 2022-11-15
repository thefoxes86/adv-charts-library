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
            _this.circle = el.querySelector('.circle-chart__circle');
            var status = _this.objAdv.percValues[_this.objAdv.percValues.length - 1] >= 0 && _this.objAdv.percValues[_this.objAdv.percValues.length - 1] < 33 ? 'red' : _this.objAdv.percValues[_this.objAdv.percValues.length - 1] >= 33 && _this.objAdv.percValues[_this.objAdv.percValues.length - 1] < 66 ? 'orange' : 'green';
            _this.header.classList.add(status);
            console.log('TEST', "".concat(_this.objAdv.percValues[_this.objAdv.percValues.length - 1]));
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
            _this.contentRow = __spreadArray([], el.querySelectorAll('.content__row'), true);
            _this.iterateRow(_this.contentRow, index);
            el.classList.add('active');
        });
    };
    Generatechartsadv.prototype.iterateRow = function (contentRow, index) {
        var _this = this;
        contentRow.forEach(function (row, indexRow) {
            _this.barContent = row.querySelector('.bar__content');
            var status = _this.objAdv.percValues[indexRow] >= 0 && _this.objAdv.percValues[indexRow] < 33 ? 'red' : _this.objAdv.percValues[indexRow] >= 33 && _this.objAdv.percValues[indexRow] < 66 ? 'orange' : 'green';
            _this.barContent.classList.contains('red') && _this.barContent.classList.remove('red');
            _this.barContent.classList.contains('orange') && _this.barContent.classList.remove('orange');
            _this.barContent.classList.contains('green') && _this.barContent.classList.remove('green');
            _this.barContent.classList.add(status);
            _this.barContent.style.width = "".concat(_this.objAdv.percValues[indexRow], "%");
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
            _this.textValue.classList.contains('red-text') && _this.textValue.classList.remove('red-text');
            _this.textValue.classList.contains('orange-text') && _this.textValue.classList.remove('orange-text');
            _this.textValue.classList.contains('green-text') && _this.textValue.classList.remove('green-text');
            _this.textValue.classList.add("".concat(status, "-text"));
        });
    };
    return Generatechartsadv;
}());
// @ts-ignore
globalThis.Generatechartsadv = Generatechartsadv;
exports["default"] = Generatechartsadv;
