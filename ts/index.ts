/// <reference path="typings/tsd.d.ts" />
var beautylog = require("beautylog");
var colors = require("colors");

var debugActive:boolean = false;
var debugsmart = {
    log: function(message:string){
        if (debugActive) {
            beautylog.log("Debug:".zebra + ' ' + message);
        }
    },
    activate: function(debugArg:boolean){
        debugActive = debugArg;
    }
};

module.exports = debugsmart;
