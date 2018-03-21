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

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _link = require("next\\dist\\lib\\link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isCustom = false;

var Menu = function (_Component) {
  (0, _inherits3.default)(Menu, _Component);

  function Menu() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isCustom: isCustom
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      isCustom = true;
      this.refs['title'].addEventListener("webkitAnimationEnd", function () {
        _this2.setState({ isCustom: isCustom });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isCustom = this.state.isCustom;

      return _react2.default.createElement("div", { ref: "title", className: "jsx-3788501849" + " " + ("animated " + (isCustom ? '' : 'fadeInDown'))
      }, _react2.default.createElement("p", {
        className: "jsx-3788501849"
      }, "Jarvan's Blog"), _react2.default.createElement("ul", {
        className: "jsx-3788501849"
      }, _react2.default.createElement(_link2.default, { href: "/" }, _react2.default.createElement("a", {
        className: "jsx-3788501849"
      }, "Home")), _react2.default.createElement(_link2.default, { href: "/blog" }, _react2.default.createElement("a", {
        className: "jsx-3788501849"
      }, "Blog"))), _react2.default.createElement(_style2.default, {
        styleId: "3788501849",
        css: ["div.jsx-3788501849{line-height:40px;height:40px;box-shadow:rgba(0,0,0,0.16) 0px 3px 10px,rgba(0,0,0,0.23) 0px 3px 10px;}", "p.jsx-3788501849{float:left;color:white;text-align:center;font-size:14px;width:120px;background-color:black;}", "ul.jsx-3788501849{height:40px;background-color:#fff;marigin-left:120px;padding-right:200px;}", "a.jsx-3788501849{float:right;width:100px;margin:0 10px;font-size:14px;}"]
      }));
    }
  }]);

  return Menu;
}(_react.Component);

exports.default = Menu;