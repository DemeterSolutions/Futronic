var exec = require("cordova/exec");

var fingerScanner = {};

fingerScanner.scan = function (successCB, errorCB) {
        console.log("calling scan");
        exec(successCB, errorCB, "FpsPluging", "scan",[""]);
    };
 module.exports = fingerScanner;
