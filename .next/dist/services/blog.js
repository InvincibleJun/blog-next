'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArticle = undefined;

var _request = require('../utils/request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getArticle = exports.getArticle = function getArticle(arg) {
  return (0, _request2.default)('/api/article/get', { method: 'get' });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzXFxibG9nLmpzIl0sIm5hbWVzIjpbInJlcXVlc3QiLCJnZXRBcnRpY2xlIiwiYXJnIiwibWV0aG9kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQW9CLEFBQXBCLEFBRUE7Ozs7OztBQUFPLElBQU0sa0NBQWEsU0FBYixBQUFhLFdBQUMsQUFBRCxLQUFTLEFBQ2pDO1NBQU8sdUJBQVEsQUFBUixvQkFBNEIsRUFBRSxRQUFRLEFBQVYsQUFBNUIsQUFBUCxBQUNEO0FBRk0iLCJmaWxlIjoiYmxvZy5qcyIsInNvdXJjZVJvb3QiOiJFOi9ibG9nL2Jsb2ctbmV4dCJ9