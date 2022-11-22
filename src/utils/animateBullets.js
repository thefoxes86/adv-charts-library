"use strict";
exports.__esModule = true;
var animateBullets = function (bullet, valuePerc, previousValue) {
    if (previousValue === void 0) { previousValue = 0; }
    if (previousValue > valuePerc) {
        console.info('DIFF', previousValue, valuePerc);
        // DECRESCE
        if (previousValue >= 0 && previousValue <= 20 && valuePerc >= 0 && valuePerc < 20) {
            loopBulletsAnimation(1, 1, bullet, valuePerc);
        }
        if (previousValue >= 20 && previousValue <= 40 && valuePerc >= 0 && valuePerc < 20) {
            loopBulletsAnimation(2, 1, bullet, valuePerc);
        }
        if (previousValue >= 20 && previousValue <= 40 && valuePerc >= 20 && valuePerc < 40) {
            loopBulletsAnimation(2, 2, bullet, valuePerc);
        }
        if (previousValue >= 40 && previousValue <= 60 && valuePerc >= 0 && valuePerc < 20) {
            loopBulletsAnimation(3, 1, bullet, valuePerc);
        }
        if (previousValue >= 40 && previousValue <= 60 && valuePerc >= 20 && valuePerc < 40) {
            loopBulletsAnimation(3, 2, bullet, valuePerc);
        }
        if (previousValue >= 40 && previousValue <= 60 && valuePerc >= 40 && valuePerc < 60) {
            loopBulletsAnimation(3, 3, bullet, valuePerc);
        }
        if (previousValue >= 60 && previousValue <= 80 && valuePerc >= 0 && valuePerc < 20) {
            loopBulletsAnimation(4, 1, bullet, valuePerc);
        }
        if (previousValue >= 60 && previousValue <= 80 && valuePerc >= 20 && valuePerc < 40) {
            loopBulletsAnimation(4, 2, bullet, valuePerc);
        }
        if (previousValue >= 60 && previousValue <= 80 && valuePerc >= 40 && valuePerc < 60) {
            loopBulletsAnimation(4, 3, bullet, valuePerc);
        }
        if (previousValue >= 60 && previousValue <= 80 && valuePerc >= 60 && valuePerc < 80) {
            loopBulletsAnimation(4, 4, bullet, valuePerc);
        }
        if (previousValue >= 80 && previousValue <= 100 && valuePerc >= 0 && valuePerc < 20) {
            loopBulletsAnimation(5, 1, bullet, valuePerc);
        }
        if (previousValue >= 80 && previousValue <= 100 && valuePerc >= 20 && valuePerc < 40) {
            loopBulletsAnimation(5, 2, bullet, valuePerc);
        }
        if (previousValue >= 80 && previousValue <= 100 && valuePerc >= 40 && valuePerc < 60) {
            loopBulletsAnimation(5, 3, bullet, valuePerc);
        }
        if (previousValue >= 80 && previousValue <= 100 && valuePerc >= 60 && valuePerc < 80) {
            loopBulletsAnimation(5, 4, bullet, valuePerc);
        }
        if (previousValue >= 80 && previousValue <= 100 && valuePerc >= 80 && valuePerc <= 100) {
            loopBulletsAnimation(5, 5, bullet, valuePerc);
        }
    }
    else {
        // CRESCE
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
    }
};
exports["default"] = animateBullets;
var loopBulletsAnimation = function (bulletStart, bulletEnd, bullet, value, previous) {
    var _loop_1 = function (i) {
        // 3 - 1
        var mulTime = bulletStart - i;
        setTimeout(function () {
            console.log(bulletEnd !== i ? "0%" : "".concat(((value - ((bulletEnd - 1) * 20)) / 2) * 10, "%"), (value - ((bulletEnd - 1) * 20)));
            bullet[i - 1].style.width = bulletEnd !== i ? "0%" : "".concat(((value - ((bulletEnd - 1) * 20)) / 2) * 10, "%");
        }, mulTime * 200);
    };
    for (var i = bulletStart; i >= bulletEnd; i--) {
        _loop_1(i);
    }
};
