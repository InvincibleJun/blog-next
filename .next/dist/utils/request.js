"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (url) {
  var arg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _arg$method = arg.method,
      method = _arg$method === undefined ? "get" : _arg$method,
      params = arg.params,
      data = arg.data;

  return (0, _axios2.default)({
    method: method,
    url: baseUrl + url,
    params: params,
    data: data
  });
};

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseUrl = "http://localhost:10086";