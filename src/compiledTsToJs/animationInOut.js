"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animationOut = function (theId, duration1) {
    document.getElementById(theId).animate([
        { opacity: 1 },
        { opacity: 0 },
    ], {
        duration: duration1,
        fill: 'forwards'
    });
};
var animationIn = function (theId, duration1) {
    document.getElementById(theId).animate([
        { opacity: 0 },
        { opacity: 1 }
    ], {
        duration: duration1,
        fill: 'forwards'
    });
};
exports.default = { animationIn: animationIn, animationOut: animationOut };
