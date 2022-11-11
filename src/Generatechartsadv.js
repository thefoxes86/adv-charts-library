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
    function Generatechartsadv(array, className) {
        this.arrayAdv = array;
        this.chartCard = __spreadArray([], document.querySelectorAll(".".concat(className)), true);
        this.typedCard = this.chartCard.filter(function (elem) { return elem.dataset['type'] === array[0].type; });
    }
    Generatechartsadv.prototype.init = function () {
        this.iterateMainElement(this.typedCard);
    };
    Generatechartsadv.prototype.iterateMainElement = function (cards) {
        var _this = this;
        cards.forEach(function (el, index) {
            _this.header = el.querySelector('.chart-card__header');
            _this.circle = el.querySelector('.circle-chart__circle');
            _this.header.classList.add(_this.arrayAdv[index].valueColors[_this.arrayAdv[index].valueColors.length - 1]);
            _this.circle.style['stroke-dasharray'] = "".concat(_this.arrayAdv[index].percValues[_this.arrayAdv[index].percValues.length - 1], " 100");
            _this.percValue = new countup_js_1.CountUp("mainValuePerc-".concat(_this.arrayAdv[index].type, "-").concat(index), _this.arrayAdv[index].realValues[_this.arrayAdv[index].realValues.length - 1], {
                suffix: _this.arrayAdv[index].valueLabels[_this.arrayAdv[index].valueLabels.length - 1]
            });
            _this.percValue.start();
            _this.contentRow = __spreadArray([], el.querySelectorAll('.content__row'), true);
            _this.iterateRow(_this.contentRow, index);
            el.classList.add('active');
        });
    };
    Generatechartsadv.prototype.iterateRow = function (contentRow, index) {
        var _this = this;
        contentRow.forEach(function (row, indexRow) {
            _this.barContent = row.querySelector('.bar__content');
            _this.barContent.classList.add(_this.arrayAdv[index].valueColors[indexRow]);
            _this.barContent.style.width = "".concat(_this.arrayAdv[index].percValues[indexRow], "%");
            _this.percValueText = new countup_js_1.CountUp("perc-value-".concat(_this.arrayAdv[index].type, "-").concat(index, "-row-").concat(indexRow), _this.arrayAdv[index].realValues[indexRow], {
                suffix: _this.arrayAdv[index].valueLabels[indexRow]
            });
            _this.percValueText.start();
            _this.textValue = document.getElementById("perc-value-".concat(_this.arrayAdv[index].type, "-").concat(index, "-row-").concat(indexRow));
            _this.textValue.classList.add("".concat(_this.arrayAdv[index].valueColors[indexRow], "-text"));
        });
    };
    return Generatechartsadv;
}());
exports["default"] = Generatechartsadv;
// const generateCharts = array => {
//   if (array?.length > 0) { 
//     let chartCard = [...document.querySelectorAll('.chart-card')]
//     let typedCard = chartCard.filter(
//       elem => elem.dataset['type'] === array[0].type
//     )
//     setTimeout(() => {
//       typedCard.forEach((el, index) => {
//         let header = el.querySelector('.chart-card__header')
//         let circle = el.querySelector('.circle-chart__circle')
//         //   let text = el.querySelector('.circle-chart__percent')
//         header.classList.add(
//           array[index].valueColors[array[index].valueColors.length - 1]
//         )
//         circle.style['stroke-dasharray'] = `${
//           array[index].percValues[array[index].percValues.length - 1]
//         } 100`
//         let percValue = new CountUp(
//           `mainValuePerc-${array[index].type}-${index}`,
//           array[index].realValues[array[index].realValues.length - 1],
//           {
//             suffix:
//               array[index].valueLabels[array[index].valueLabels.length - 1],
//           }
//         )
//         percValue.start()
//         let contentRow = [...el.querySelectorAll('.content__row')]
//         contentRow.forEach((row, indexRow) => {
//           let barContent = row.querySelector('.bar__content')
//           barContent.classList.add(array[index].valueColors[indexRow])
//           barContent.style.width = `${array[index].percValues[indexRow]}%`
//           let percValueText = new CountUp(
//             `perc-value-${array[index].type}-${index}-row-${indexRow}`,
//             array[index].realValues[indexRow],
//             {
//               suffix: array[index].valueLabels[indexRow],
//             }
//           )
//           percValueText.start()
//           let textValue = document.getElementById(
//             `perc-value-${array[index].type}-${index}-row-${indexRow}`
//           )
//           textValue.classList.add(`${array[index].valueColors[indexRow]}-text`)
//         })
//         el.classList.add('active')
//       })
//     }, 1000)
//   }
// }
