"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMail = undefined;

var _request = require("../utils/request");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sendMail = exports.sendMail = function sendMail(data) {
  return (0, _request2.default)("/api/user/sendMail", { method: "POST", data: data });
};