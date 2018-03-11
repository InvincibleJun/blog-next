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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzXFxyZXF1ZXN0LmpzIl0sIm5hbWVzIjpbImF4aW9zIiwiYmFzZVVybCIsInVybCIsImFyZyIsIm1ldGhvZCIsInBhcmFtcyIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFJZSxVQUFBLEFBQVUsS0FBZTtNQUFWLEFBQVUsMEVBQUosQUFBSTtvQkFBQSxBQUNHLElBREgsQUFDOUI7TUFEOEIsQUFDOUIscUNBRDhCLEFBQ3JCLFFBRHFCO01BQUEsQUFDZCxTQURjLEFBQ0csSUFESCxBQUNkO01BRGMsQUFDTixPQURNLEFBQ0csSUFESCxBQUNOLEFBQ2hDOzs7WUFBYSxBQUNILEFBQ1I7U0FBSyxVQUZNLEFBRUksQUFDZjtZQUhXLEFBSVg7VUFKRixBQUFPLEFBQU0sQUFNZDtBQU5jLEFBQ1gsR0FESzs7O0FBTlQsQUFBTzs7Ozs7O0FBRVAsSUFBTSxVQUFOLEFBQWdCLEFBRWhCIiwiZmlsZSI6InJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiRTovYmxvZy9ibG9nLW5leHQifQ==