/// <reference path="typings/tsd.d.ts" />
var smartDebug = require("./index.js");
var bl = require("beautylog")("os");
smartDebug.log("This message is not shown");
smartDebug.activate(true);
smartDebug.log("This debug message is shown");
bl.success("Test successfull");
