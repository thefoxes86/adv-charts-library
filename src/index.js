"use strict";
exports.__esModule = true;
var advert_1 = require("./api/advert");
var home_1 = require("./api/home");
var gmb_1 = require("./api/gmb");
var Generatechartsadv_1 = require("./Generatechartsadv");
window.addEventListener('DOMContentLoaded', function () {
    var chartAdvert = new Generatechartsadv_1["default"](advert_1["default"], 'chart-card');
    var chartHome = new Generatechartsadv_1["default"](home_1["default"], 'chart-card');
    var chartGmb = new Generatechartsadv_1["default"](gmb_1["default"], 'chart-card');
    setTimeout(function () {
        chartAdvert.init();
    }, 1000);
    setTimeout(function () {
        chartHome.init();
    }, 2000);
    setTimeout(function () {
        chartGmb.init();
    }, 3000);
});
