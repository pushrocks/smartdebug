/// <reference path="typings/tsd.d.ts" />
var beautylog = require("beautylog")("os");
var colors = require("colors");
var debugActive = false;
var smartDebug = {
    log: function (message) {
        if (debugActive) {
            beautylog.log("###DEBUG:###".rainbow + ' ' + message);
        }
    },
    activate: function (debugArg) {
        debugActive = debugArg;
    }
};
module.exports = smartDebug;
