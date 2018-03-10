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

var _index = require("next\\dist\\lib\\router\\index.js");

var _nav = require("./nav");

var _nav2 = _interopRequireDefault(_nav);

var _Head = require("./Head");

var _Head2 = _interopRequireDefault(_Head);

var _MuiThemeProvider = require("material-ui/styles/MuiThemeProvider");

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "E:\\blog\\blog-next\\components\\Layout.js";

// import '../assets/css/reset.css';
// import '../assets/css/index.css';
// import '../assets/fonts/iconfont.css';


var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout() {
    (0, _classCallCheck3.default)(this, Layout);

    return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
  }

  (0, _createClass3.default)(Layout, [{
    key: "render",
    value: function render() {
      console.log(this.props);
      return _react2.default.createElement(_MuiThemeProvider2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(_Head2.default, { title: "\u9996\u9875", __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement(_nav2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), this.props.children));
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = (0, _index.withRouter)(Layout);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIndpdGhSb3V0ZXIiLCJOYXYiLCJIZWFkIiwiTXVpVGhlbWVQcm92aWRlciIsIkxheW91dCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUtULEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTzs7Ozs7Ozs7QUFMUDtBQUNBO0FBQ0E7OztJLEFBSU07Ozs7Ozs7Ozs7OzZCQUNLLEFBQ1A7Y0FBQSxBQUFRLElBQUksS0FBWixBQUFpQixBQUNqQjs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsZ0NBQUssT0FBTixBQUFZO29CQUFaO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLEFBQUM7O29CQUFEO3NCQUZGLEFBRUUsQUFDQztBQUREO0FBQUEsZUFDQyxBQUFLLE1BTFosQUFDRSxBQUNFLEFBR2MsQUFJbkI7Ozs7O0FBWmtCLEEsQUFlckI7O2tCQUFlLHVCQUFmLEFBQWUsQUFBVyIsImZpbGUiOiJMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiRTovYmxvZy9ibG9nLW5leHQifQ==