/// <reference path="typings/tsd.d.ts" />
var smartDebug = require("./index.js");
var bl = require("beautylog")("os");
smartDebug.log("This message is not shown");
bl.log("debug.status() is " + smartDebug.getStatus());
smartDebug.activate(true);
smartDebug.log("This debug message is shown");
bl.log("debug.status() is " + smartDebug.getStatus());
bl.success("Test successfull");
