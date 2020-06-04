"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splitRow = void 0;

var splitRow = function splitRow(row, separator) {
  var values = row.split(new RegExp("(?!\\B\"[^\"]*)".concat(separator, "(?![^\"]*\"\\B)"), 'g'));
  return values.map(function (str) {
    return str.match(/^".*"$/g) ? str.substr(1, str.length - 2) : str;
  });
};

exports.splitRow = splitRow;