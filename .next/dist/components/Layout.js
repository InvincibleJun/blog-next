"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("next\\node_modules\\babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("next\\node_modules\\babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("next\\node_modules\\babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("next\\node_modules\\babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("next\\node_modules\\babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _index = require("next\\dist\\lib\\router\\index.js");

var _nav = require("./nav");

var _nav2 = _interopRequireDefault(_nav);

var _Head = require("./Head");

var _Head2 = _interopRequireDefault(_Head);

var _Banner = require("./Banner");

var _Banner2 = _interopRequireDefault(_Banner);

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
      }), this.props.children, _react2.default.createElement(_Banner2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      })));
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = (0, _index.withRouter)(Layout);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIndpdGhSb3V0ZXIiLCJOYXYiLCJIZWFkIiwiQmFubmVyIiwiTXVpVGhlbWVQcm92aWRlciIsIkxheW91dCIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7O0FBSVQsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVk7Ozs7QUFFbkIsQUFBTzs7Ozs7OztBQVBQO0FBQ0E7QUFDQTs7O0ksQUFNTTs7Ozs7Ozs7Ozs7NkJBQ0ssQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsZ0NBQUssT0FBTixBQUFZO29CQUFaO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNBLEFBQUM7O29CQUFEO3NCQUZGLEFBRUUsQUFDQztBQUREO0FBQUEsZUFDQyxBQUFLLE1BSFIsQUFHYyxBQUNaLDBCQUFBLEFBQUM7O29CQUFEO3NCQU5OLEFBQ0UsQUFDRSxBQUlFLEFBSVA7QUFKTztBQUFBOzs7OztBQVJXLEEsQUFlckI7O2tCQUFlLHVCQUFmLEFBQWUsQUFBVyIsImZpbGUiOiJMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiRTovYmxvZy9ibG9nLW5leHQifQ==