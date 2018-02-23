"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "E:\\blog\\blog-next\\components\\blog\\list.js";


var List = function (_Component) {
  (0, _inherits3.default)(List, _Component);

  function List() {
    (0, _classCallCheck3.default)(this, List);

    return (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).apply(this, arguments));
  }

  (0, _createClass3.default)(List, [{
    key: "render",
    value: function render() {
      var data = this.props.data;

      return data.map(function (art) {
        return _react2.default.createElement("div", { key: art.title, __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        }, _react2.default.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        }, art.title), _react2.default.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }, art.desc));
      });
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var req = _ref.req;

      var userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
      return { userAgent: 1 };
    }
  }]);

  return List;
}(_react.Component);

exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGJsb2dcXGxpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMaXN0IiwiZGF0YSIsInByb3BzIiwibWFwIiwiYXJ0IiwidGl0bGUiLCJkZXNjIiwicmVxIiwidXNlckFnZW50IiwiaGVhZGVycyIsIm5hdmlnYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7Ozs7OztJQUVWLEE7Ozs7Ozs7Ozs7OzZCQU1LO1VBQUEsQUFDQyxPQUFTLEtBRFYsQUFDZSxNQURmLEFBQ0MsQUFDUjs7a0JBQU8sQUFBSyxJQUFJLGVBQUE7K0JBQ2QsY0FBQSxTQUFLLEtBQUssSUFBVixBQUFjO3NCQUFkO3dCQUFBLEFBQ0U7QUFERjtTQUFBLGtCQUNFLGNBQUE7O3NCQUFBO3dCQUFBLEFBQUs7QUFBTDtBQUFBLGVBREYsQUFDRSxBQUFTLEFBQ1Qsd0JBQUEsY0FBQTs7c0JBQUE7d0JBQUEsQUFBSTtBQUFKO0FBQUEsZUFIWSxBQUNkLEFBRUUsQUFBUTtBQUhaLEFBQU8sQUFPUixPQVBROzs7OzBDQVB1QjtVQUFQLEFBQU8sV0FBUCxBQUFPLEFBQzlCOztVQUFNLFlBQVksTUFBTSxJQUFBLEFBQUksUUFBVixBQUFNLEFBQVksZ0JBQWdCLFVBQXBELEFBQThELEFBQzlEO2FBQU8sRUFBRSxXQUFULEFBQU8sQUFBYSxBQUNyQjs7Ozs7QUFKZ0IsQSxBQWtCbkI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiJFOi9ibG9nL2Jsb2ctbmV4dCJ9