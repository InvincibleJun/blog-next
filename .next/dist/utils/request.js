"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (url) {
  var arg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _arg$method = arg.method,
      method = _arg$method === undefined ? "get" : _arg$method,
      params = arg.params;

  return (0, _axios2.default)({
    method: method,
    url: baseUrl + url,
    params: params
  });
};

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseUrl = "http://localhost:10086";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzXFxyZXF1ZXN0LmpzIl0sIm5hbWVzIjpbImF4aW9zIiwiYmFzZVVybCIsInVybCIsImFyZyIsIm1ldGhvZCIsInBhcmFtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQUllLFVBQUEsQUFBUyxLQUFlO01BQVYsQUFBVSwwRUFBSixBQUFJO29CQUFBLEFBQ0YsSUFERSxBQUM3QjtNQUQ2QixBQUM3QixxQ0FENkIsQUFDcEIsUUFEb0I7TUFBQSxBQUNiLFNBRGEsQUFDRixJQURFLEFBQ2IsQUFDeEI7OztZQUFhLEFBQ0gsQUFDUjtTQUFLLFVBRk0sQUFFSSxBQUNmO1lBSEYsQUFBTyxBQUFNLEFBS2Q7QUFMYyxBQUNYLEdBREs7OztBQU5ULEFBQU87Ozs7OztBQUVQLElBQU0sVUFBTixBQUFnQixBQUVoQiIsImZpbGUiOiJyZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6IkU6L2Jsb2cvYmxvZy1uZXh0In0=