"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOne = exports.getArticle = undefined;

var _request = require("../utils/request");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getArticle = exports.getArticle = function getArticle(arg) {
  return (0, _request2.default)("/api/article/get");
};

var getOne = exports.getOne = function getOne(params) {
  return (0, _request2.default)("/api/article/getOne", { params: params });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzXFxibG9nLmpzIl0sIm5hbWVzIjpbInJlcXVlc3QiLCJnZXRBcnRpY2xlIiwiZ2V0T25lIiwicGFyYW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQW9CLEFBQXBCLEFBRUE7Ozs7OztBQUFPLElBQU0sa0NBQWEsU0FBYixBQUFhLGdCQUFPLEFBQy9CO1NBQU8sdUJBQVEsQUFBUixBQUFQLEFBQ0Q7QUFGTSxBQUlQOztBQUFPLElBQU0sMEJBQVMsU0FBVCxBQUFTLGVBQVUsQUFDOUI7U0FBTyx1QkFBUSxBQUFSLHVCQUErQixFQUFFLFFBQUYsQUFBL0IsQUFBUCxBQUNEO0FBRk0iLCJmaWxlIjoiYmxvZy5qcyIsInNvdXJjZVJvb3QiOiJFOi9ibG9nLW5leHQifQ==