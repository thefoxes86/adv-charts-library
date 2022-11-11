"use strict";
// Version 1.0.4
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
    function Generatechartsadv(className) {
        this.chartCard = __spreadArray([], document.querySelectorAll(".".concat(className)), true);
    }
    Generatechartsadv.prototype.init = function (array) {
        this.arrayAdv = array;
        this.typedCard = this.chartCard.filter(function (elem) { return elem.dataset['type'] === array.type; });
        this.iterateMainElement(this.typedCard);
    };
    Generatechartsadv.prototype.iterateMainElement = function (cards) {
        var _this = this;
        cards.forEach(function (el, index) {
            _this.header = el.querySelector('.chart-card__header');
            _this.circle = el.querySelector('.circle-chart__circle');
            _this.header.classList.add(_this.arrayAdv.valueColors[_this.arrayAdv.valueColors.length - 1]);
            _this.circle.style['stroke-dasharray'] = "".concat(_this.arrayAdv.percValues[_this.arrayAdv.percValues.length - 1], " 100");
            var previousPercValue = document.getElementById("mainValuePerc-".concat(_this.arrayAdv.type, "-").concat(index));
            var value = "".concat(_this.arrayAdv.realValues[_this.arrayAdv.realValues.length - 1]).concat(_this.arrayAdv.valueLabels[_this.arrayAdv.valueLabels.length - 1]);
            if ((previousPercValue === null || previousPercValue === void 0 ? void 0 : previousPercValue.innerHTML) !== value) {
                _this.percValue = new countup_js_1.CountUp("mainValuePerc-".concat(_this.arrayAdv.type, "-").concat(index), _this.arrayAdv.realValues[_this.arrayAdv.realValues.length - 1], {
                    suffix: _this.arrayAdv.valueLabels[_this.arrayAdv.valueLabels.length - 1]
                });
                _this.percValue.start();
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
            _this.barContent.classList.add(_this.arrayAdv.valueColors[indexRow]);
            _this.barContent.style.width = "".concat(_this.arrayAdv.percValues[indexRow], "%");
            var previousValue = document.getElementById("perc-value-".concat(_this.arrayAdv.type, "-").concat(index, "-row-").concat(indexRow));
            if ((previousValue === null || previousValue === void 0 ? void 0 : previousValue.innerHTML) !== "".concat(_this.arrayAdv.realValues[indexRow]).concat(_this.arrayAdv.valueLabels[indexRow])) {
                _this.percValueText = new countup_js_1.CountUp("perc-value-".concat(_this.arrayAdv.type, "-").concat(index, "-row-").concat(indexRow), _this.arrayAdv.realValues[indexRow], {
                    suffix: _this.arrayAdv.valueLabels[indexRow]
                });
                _this.percValueText.start();
            }
            _this.textValue = document.getElementById("perc-value-".concat(_this.arrayAdv.type, "-").concat(index, "-row-").concat(indexRow));
            _this.textValue.classList.add("".concat(_this.arrayAdv.valueColors[indexRow], "-text"));
        });
    };
    return Generatechartsadv;
}());
exports["default"] = Generatechartsadv;
