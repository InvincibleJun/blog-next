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

var _head = require("next\\dist\\lib\\head.js");

var _head2 = _interopRequireDefault(_head);

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Head = function (_Component) {
  (0, _inherits3.default)(Head, _Component);

  function Head() {
    (0, _classCallCheck3.default)(this, Head);

    return (0, _possibleConstructorReturn3.default)(this, (Head.__proto__ || (0, _getPrototypeOf2.default)(Head)).apply(this, arguments));
  }

  (0, _createClass3.default)(Head, [{
    key: "render",
    value: function render() {
      var title = this.props.title;

      return _react2.default.createElement(_head2.default, null, _react2.default.createElement("meta", { charSet: "UTF-8" }), _react2.default.createElement("title", null, title || ""), _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }), _react2.default.createElement("link", { rel: "stylesheet", href: "/static/css/reset.css" }), _react2.default.createElement("link", { rel: "stylesheet", href: "/static/css/index.css" }), _react2.default.createElement("link", { rel: "stylesheet", href: "/static/css/animate.css" }), _react2.default.createElement("link", { rel: "stylesheet", href: "/static/css/github-markdonw.css" }));
    }
  }]);

  return Head;
}(_react.Component);

exports.default = Head;