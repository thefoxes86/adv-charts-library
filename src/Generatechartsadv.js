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
var animateBullets_1 = require("./utils/animateBullets");
var Generatechartsadv = /** @class */ (function () {
    function Generatechartsadv() {
        // @ts-ignore
        this.chartCard = __spreadArray([], document.querySelectorAll(".chart-card"), true);
        this.update = false;
        this.setLoading = true;
        this.percValueText = [];
        this.percValue = [];
        this.titlePercValue = [];
        this.precValueHeaderTitleValue = null;
        this.previousValue = null;
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
            var _a, _b;
            _this.header = el.querySelector('.chart-card__header');
            _this.loading(false, el);
            var status = _this.objAdv.percValues[_this.objAdv.percValues.length - 1] >= 0 && _this.objAdv.percValues[_this.objAdv.percValues.length - 1] < _this.objAdv.valueRangeColors[0] ? 'red' : _this.objAdv.percValues[_this.objAdv.percValues.length - 1] >= _this.objAdv.valueRangeColors[0] && _this.objAdv.percValues[_this.objAdv.percValues.length - 1] < _this.objAdv.valueRangeColors[1] ? 'orange' : 'green';
            // HEADER TYPE 1
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
                    if (_this.update) {
                        // @ts-ignore
                        var updateCound = _this.percValue.find(function (element) { return element.id === _this.objAdv.type; });
                        (_a = updateCound === null || updateCound === void 0 ? void 0 : updateCound.data) === null || _a === void 0 ? void 0 : _a.update(_this.objAdv.realValues[_this.objAdv.realValues.length - 1]);
                    }
                    else {
                        var checkDecimals = (_this.objAdv.realValues[_this.objAdv.realValues.length - 1] - Math.floor(_this.objAdv.realValues[_this.objAdv.realValues.length - 1])) !== 0;
                        var initTitleCount = new countup_js_1.CountUp("mainValuePerc-".concat(_this.objAdv.type, "-").concat(index), _this.objAdv.realValues[_this.objAdv.realValues.length - 1], {
                            suffix: _this.objAdv.valueLabels[_this.objAdv.valueLabels.length - 1],
                            decimalPlaces: checkDecimals ? 1 : 0,
                            decimal: '.'
                        });
                        // @ts-ignore
                        _this.percValue.push({ id: _this.objAdv.type, data: initTitleCount });
                        initTitleCount.start();
                    }
                }
            }
            // HEADER TYPE 2
            if (_this.objAdv.format === 'type2') {
                _this.rowType = document.querySelector("[data-type=".concat(_this.objAdv.type, "]"));
                _this.bullet = _this.rowType.querySelectorAll('.overlay__full');
                var valuePerc = _this.objAdv.percValues[_this.objAdv.percValues.length - 1];
                _this.previousValue = _this.previousValue === null ? _this.objAdv.percValues[_this.objAdv.percValues.length - 1] : _this.previousValue;
                _this.loading(false, _this.rowType);
                _this.bullet.forEach(function (el) {
                    el.style.background = "".concat(status);
                });
                if (_this.previousValue > valuePerc) {
                    (0, animateBullets_1["default"])(_this.bullet, valuePerc, _this.previousValue);
                    _this.previousValue = null;
                }
                else {
                    (0, animateBullets_1["default"])(_this.bullet, valuePerc, _this.previousValue);
                }
                if (_this.update) {
                    var updateCound = _this.titlePercValue.find(function (element) { return element.id === _this.objAdv.type; });
                    (_b = updateCound === null || updateCound === void 0 ? void 0 : updateCound.data) === null || _b === void 0 ? void 0 : _b.update(_this.objAdv.realValues[_this.objAdv.realValues.length - 1]);
                }
                else {
                    var checkDecimals = (_this.objAdv.realValues[_this.objAdv.realValues.length - 1] - Math.floor(_this.objAdv.realValues[_this.objAdv.realValues.length - 1])) !== 0;
                    var initTitleCount = new countup_js_1.CountUp("perc-title-".concat(_this.objAdv.type), _this.objAdv.realValues[_this.objAdv.realValues.length - 1], {
                        suffix: _this.objAdv.valueLabels[_this.objAdv.valueLabels.length - 1],
                        decimalPlaces: checkDecimals ? 1 : 0,
                        decimal: '.'
                    });
                    // @ts-ignore
                    _this.titlePercValue.push({ id: _this.objAdv.type, data: initTitleCount });
                    initTitleCount.start();
                }
                _this.headerTextValue = document.getElementById("perc-title-".concat(_this.objAdv.type));
                if (_this.headerTextValue) {
                    _this.headerTextValue.classList.contains('red-text') && _this.headerTextValue.classList.remove('red-text');
                    _this.headerTextValue.classList.contains('orange-text') && _this.headerTextValue.classList.remove('orange-text');
                    _this.headerTextValue.classList.contains('green-text') && _this.headerTextValue.classList.remove('green-text');
                    _this.headerTextValue.classList.add("".concat(status, "-text"));
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
            var _a;
            var status = _this.objAdv.overrideDefaultColors ? _this.objAdv.valueColors[indexRow] : _this.objAdv.percValues[indexRow] >= 0 && _this.objAdv.percValues[indexRow] < _this.objAdv.valueRangeColors[0] ? 'red' : _this.objAdv.percValues[indexRow] >= _this.objAdv.valueRangeColors[0] && _this.objAdv.percValues[indexRow] < _this.objAdv.valueRangeColors[1] ? 'orange' : 'green';
            // ROW TYPE 1
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
            // ROW TYPE 2
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
                if (_this.update) {
                    var updateCount = _this.percValueText.find(function (element) { return element.id === "".concat(_this.objAdv.type, "-").concat(indexRow); });
                    (_a = updateCount === null || updateCount === void 0 ? void 0 : updateCount.data) === null || _a === void 0 ? void 0 : _a.update(_this.objAdv.realValues[indexRow]);
                }
                else {
                    var checkDecimals = (_this.objAdv.realValues[indexRow] - Math.floor(_this.objAdv.realValues[indexRow])) !== 0;
                    var initCountJs = new countup_js_1.CountUp("perc-value-".concat(_this.objAdv.type, "-").concat(index, "-row-").concat(indexRow), _this.objAdv.realValues[indexRow], {
                        suffix: _this.objAdv.valueLabels[indexRow],
                        decimalPlaces: checkDecimals ? 1 : 0,
                        decimal: '.'
                    });
                    // @ts-ignore
                    _this.percValueText.push({ id: "".concat(_this.objAdv.type, "-").concat(indexRow), data: initCountJs });
                    initCountJs.start();
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
