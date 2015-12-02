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
    run: function(functionArg) {
        if (debugActive) {
            functionArg();
        }
    },
    activate: function(debugArg:boolean){
        debugActive = debugArg;
        beautylog.log("#### ".rainbow + "!!! ".red + "Debugging has been activated!".blue + " !!!".red + " ####".rainbow);
    },
    getStatus: function(){
        return debugActive;
    }
};

module.exports = smartDebug;
