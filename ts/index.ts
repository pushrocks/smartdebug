/// <reference path="typings/tsd.d.ts" />
var beautylog = require("beautylog")("os");
var colors = require("colors");

var debugActive:boolean = false;
var smartDebug = {
    log: function(message:string){
        if (debugActive) {
            beautylog.log("###DEBUG:###".rainbow + ' ' + message);
        }
    },
    activate: function(debugArg:boolean){
        debugActive = debugArg;
    }
};

module.exports = smartDebug;
