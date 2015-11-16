/// <reference path="typings/tsd.d.ts" />
var beautylog = require("beautylog");
var colors = require("colors");
var debugActive = false;
var smartdebug = {
    log: function (message) {
        if (debugActive) {
            beautylog.log("Debug:".zebra + ' ' + message);
        }
    },
    activate: function (debugArg) {
        debugActive = debugArg;
    }
};
module.exports = smartdebug;
