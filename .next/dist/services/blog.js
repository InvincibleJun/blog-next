"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNewList = exports.getOne = exports.getArticle = undefined;

var _request = require("../utils/request");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getArticle = exports.getArticle = function getArticle() {
  return (0, _request2.default)("/api/article/get");
};

var getOne = exports.getOne = function getOne(params) {
  return (0, _request2.default)("/api/article/getOne", { params: params });
};

var getNewList = exports.getNewList = function getNewList() {
  return (0, _request2.default)("/api/article/getNewList");
};