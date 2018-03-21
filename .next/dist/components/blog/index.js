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

var _colors = require("material-ui/styles/colors");

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _newList = require("./new-list");

var _newList2 = _interopRequireDefault(_newList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blog = function (_Component) {
  (0, _inherits3.default)(Blog, _Component);

  function Blog() {
    (0, _classCallCheck3.default)(this, Blog);

    return (0, _possibleConstructorReturn3.default)(this, (Blog.__proto__ || (0, _getPrototypeOf2.default)(Blog)).apply(this, arguments));
  }

  (0, _createClass3.default)(Blog, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement("div", {
        className: "jsx-765741239" + " " + "blog-header"
      }, _react2.default.createElement("h4", {
        className: "jsx-765741239"
      }, "may the force be with you!")), _react2.default.createElement("div", {
        className: "jsx-765741239" + " " + "blog-container"
      }, _react2.default.createElement("div", {
        className: "jsx-765741239"
      }, this.props.children)), _react2.default.createElement(_style2.default, {
        styleId: "765741239",
        css: [".blog-header.jsx-765741239{background:#282537;background-image:-webkit-radial-gradient(top,circle cover,#3c3b52 0%,#252233 80%);background-image:-moz-radial-gradient(top,circle cover,#3c3b52 0%,#252233 80%);background-image:-o-radial-gradient(top,circle cover,#3c3b52 0%,#252233 80%);background-image:radial-gradient(top,circle cover,#3c3b52 0%,#252233 80%);height:80px;overflow:hidden;}", ".blog-header.jsx-765741239 h4.jsx-765741239{line-height:80px;margin-left:40px;color:white;}", ".blog-container.jsx-765741239{width:1080px;margin:20px auto 60px;position:relative;min-height:600px;}", ".blog-info.jsx-765741239{width:260px;float:right;right:0;top:0;height:800px;}", ".blog-list.jsx-765741239{width:800px;height:400px;background-color:" + _colors.amber500 + ";}"]
      }));
    }
  }]);

  return Blog;
}(_react.Component);

exports.default = Blog;