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

var _style = require("styled-jsx\\style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Banner = function (_Component) {
  (0, _inherits3.default)(Banner, _Component);

  function Banner() {
    (0, _classCallCheck3.default)(this, Banner);

    return (0, _possibleConstructorReturn3.default)(this, (Banner.__proto__ || (0, _getPrototypeOf2.default)(Banner)).apply(this, arguments));
  }

  (0, _createClass3.default)(Banner, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", {
        className: "jsx-898352657" + " " + "banner"
      }, _react2.default.createElement("div", {
        className: "jsx-898352657" + " " + "banner-list"
      }, "github:  https://github.com/InvincibleJun"), _react2.default.createElement(_style2.default, {
        styleId: "898352657",
        css: [".banner.jsx-898352657{height:60px;background:#282537;background-image:-webkit-radial-gradient(top,circle cover,#3c3b52 0%,#252233 80%);background-image:-moz-radial-gradient(top,circle cover,#3c3b52 0%,#252233 80%);background-image:-o-radial-gradient(top,circle cover,#3c3b52 0%,#252233 80%);background-image:radial-gradient(top,circle cover,#3c3b52 0%,#252233 80%);bottom:0;width:100%;}", ".banner-list.jsx-898352657{color:#fff;text-align:center;line-height:60px;}"]
      }));
    }
  }]);

  return Banner;
}(_react.Component);

exports.default = Banner;