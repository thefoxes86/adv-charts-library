"use strict";
exports.__esModule = true;
var animateBullets = function (bullet, valuePerc, precValue) {
    if (valuePerc > 0 && valuePerc < 20) {
        bullet[0].style.width = "".concat((valuePerc / 2) * 10, "%");
    }
    if (valuePerc >= 20 && valuePerc < 40) {
        bullet[0].style.width = '100%';
        setTimeout(function () {
            bullet[1].style.width = "".concat(((valuePerc - 20) / 2) * 10, "%");
        }, 200);
    }
    if (valuePerc >= 40 && valuePerc < 60) {
        bullet[0].style.width = "100%";
        setTimeout(function () {
            bullet[1].style.width = "100%";
        }, 200);
        setTimeout(function () {
            bullet[2].style.width = "".concat(((valuePerc - 40) / 2) * 10, "%");
        }, 400);
    }
    if (valuePerc >= 60 && valuePerc < 80) {
        bullet[0].style.width = "100%";
        setTimeout(function () {
            bullet[1].style.width = "100%";
        }, 200);
        setTimeout(function () {
            bullet[2].style.width = "100%";
        }, 400);
        setTimeout(function () {
            bullet[3].style.width = "".concat(((valuePerc - 60) / 2) * 10, "%");
        }, 600);
    }
    if (valuePerc >= 80) {
        bullet[0].style.width = "100%";
        setTimeout(function () {
            bullet[1].style.width = "100%";
        }, 200);
        setTimeout(function () {
            bullet[2].style.width = "100%";
        }, 400);
        setTimeout(function () {
            bullet[3].style.width = "100%";
        }, 600);
        setTimeout(function () {
            bullet[4].style.width = "".concat(((valuePerc - 80) / 2) * 10, "%");
        }, 800);
    }
};
exports["default"] = animateBullets;
