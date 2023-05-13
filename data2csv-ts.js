"use strict";
exports.__esModule = true;
var fs = require("fs");
function F_AgeGroup(T_AgeGroup) {
    switch (T_AgeGroup) {
        case '1': return "0 - 27 days";
        case '2': return "28 days to 23 months";
        case '3': return "2 - 11 years";
        case '4': return "12 - 17 years";
        case '5': return "18 - 44 years";
        case '6': return "45 - 64 years";
        case '7': return "65 - 74 years";
        case '8': return ">= 75 years";
        default: return "Unknown";
    }
}
function F_Gender(T_Gender) {
    switch (T_Gender) {
        case '1': return "Male";
        case '2': return "Female";
        default: return "Unknown";
    }
}
function F_Type(T_Type) {
    switch (T_Type) {
        case '1': return "Spontaneous";
        case '2': return "Report from study";
        case '3': return "Other";
        case '4': return "Not available to sender";
        case '5': return "PMS/Special monitoring";
        default: return "Unknown";
    }
}
function F_Region(T_Region) {
    switch (T_Region) {
        case '1': return "African Region";
        case '2': return "Region of the Americas";
        case '3': return "South-East Asia Region";
        case '4': return "European Region";
        case '5': return "Eastern Mediterranean Region";
        case '6': return "Western Pacific Region";
        default: return "Unknown";
    }
}
function main(dataFilename) {
    var data = fs.readFileSync(dataFilename, 'utf8');
    var lines = data.split('\n');
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        var UMCReportID = line.slice(0, 7);
        var T_AgeGroup = line[11];
        var T_Gender = line[12];
        var DateA = line.slice(13, 21);
        var T_Type = line[21];
        var T_Region = line[22];
        var DateB = line.slice(23, 31);
        console.log("".concat(UMCReportID, ",").concat(F_AgeGroup(T_AgeGroup), ",").concat(F_Gender(T_Gender), ",").concat(DateA, ",").concat(F_Type(T_Type), ",").concat(F_Region(T_Region), ",").concat(DateB));
    }
}
var args = process.argv.slice(2);
if (args.length !== 1) {
    console.log("Please feed in your data");
    console.log("node data2csv data.txt");
    process.exit(1);
}
main(args[0]);
