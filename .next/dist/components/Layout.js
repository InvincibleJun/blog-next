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
      return _react2.default.createElement(_MuiThemeProvider2.default, null, _react2.default.createElement("div", null, _react2.default.createElement(_Head2.default, { title: "\u9996\u9875" }), _react2.default.createElement(_nav2.default, null), this.props.children, _react2.default.createElement(_Banner2.default, null)));
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = (0, _index.withRouter)(Layout);