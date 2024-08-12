"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var displayFunction_1 = require("../displayFunction");
var fetchData_1 = require("../fetchData");
var editData_1 = require("../editData");
var animationInOut_1 = require("../animationInOut");
var setDelay = function (callback, time) {
    setTimeout(function () {
        console.log("delayed");
        callback();
    }, time);
};
var openElement = function () {
    animationInOut_1.default.animationIn('firstContainer1', 1000);
};
var downloadData = function () {
    fetchData_1.default.getData(editData_1.default.editData);
};
var minimizeButton = function () {
    displayFunction_1.default.displayHome();
};
exports.default = { setDelay: setDelay, openElement: openElement, downloadData: downloadData, minimizeButton: minimizeButton };
