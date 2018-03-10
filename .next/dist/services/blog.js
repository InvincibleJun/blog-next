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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzXFxibG9nLmpzIl0sIm5hbWVzIjpbInJlcXVlc3QiLCJnZXRBcnRpY2xlIiwiZ2V0T25lIiwicGFyYW1zIiwiZ2V0TmV3TGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFvQixBQUFwQixBQUVBOzs7Ozs7QUFBTyxJQUFNLGtDQUFhLFNBQWIsQUFBYSxhQUFNLEFBQzlCO1NBQU8sdUJBQVEsQUFBUixBQUFQLEFBQ0Q7QUFGTSxBQUlQOztBQUFPLElBQU0sMEJBQVMsU0FBVCxBQUFTLGVBQVUsQUFDOUI7U0FBTyx1QkFBUSxBQUFSLHVCQUErQixFQUFFLFFBQUYsQUFBL0IsQUFBUCxBQUNEO0FBRk0sQUFJUDs7QUFBTyxJQUFNLGtDQUFhLFNBQWIsQUFBYSxhQUFNLEFBQzlCO1NBQU8sdUJBQVEsQUFBUixBQUFQLEFBQ0Q7QUFGTSIsImZpbGUiOiJibG9nLmpzIiwic291cmNlUm9vdCI6IkU6L2Jsb2ctbmV4dCJ9