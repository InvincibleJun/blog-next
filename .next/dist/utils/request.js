'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (url, arg) {
  return (0, _axios2.default)({
    method: arg.method,
    url: baseUrl + url
  });
};

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseUrl = 'http://localhost:10086';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzXFxyZXF1ZXN0LmpzIl0sIm5hbWVzIjpbImF4aW9zIiwiYmFzZVVybCIsInVybCIsImFyZyIsIm1ldGhvZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQUllLFVBQUEsQUFBVSxLQUFWLEFBQWUsS0FBSyxBQUNqQzs7WUFDVSxJQURHLEFBQ0MsQUFDWjtTQUFLLFVBRlAsQUFBTyxBQUFNLEFBRUksQUFFbEI7QUFKYyxBQUNYLEdBREs7OztBQUxULEFBQU87Ozs7OztBQUVQLElBQU0sVUFBTixBQUFnQixBQUVoQiIsImZpbGUiOiJyZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6IkU6L2Jsb2cvYmxvZy1uZXh0In0=