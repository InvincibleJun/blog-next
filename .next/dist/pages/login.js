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

var _Card = require("material-ui/Card");

var _TextField = require("material-ui/TextField");

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = require("material-ui/RaisedButton");

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _MuiThemeProvider = require("material-ui/styles/MuiThemeProvider");

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Load = function (_Component) {
  (0, _inherits3.default)(Load, _Component);

  function Load(props) {
    (0, _classCallCheck3.default)(this, Load);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Load.__proto__ || (0, _getPrototypeOf2.default)(Load)).call(this, props));

    _this.githubLogin = function (event) {
      event.preventDefault();
      window.location.href = "https://github.com/login/oauth/authorize?client_id=79c7c7124c99c2c89d7c";
    };

    _this.state = {
      username: "",
      password: ""
    };
    return _this;
  }

  (0, _createClass3.default)(Load, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_MuiThemeProvider2.default, null, _react2.default.createElement(_Card.Card, {
        style: {
          width: 400,
          margin: "200px 0 0 1000px ",
          padding: "0 50px 50px"
        }
      }, _react2.default.createElement(_TextField2.default, {
        style: { marginTop: 20 },
        hintText: "\u8BF7\u8F93\u5165\u7528\u6237\u540D",
        floatingLabelText: "\u7528\u6237\u540D",
        fullWidth: true,
        type: "text"
      }), _react2.default.createElement("br", null), _react2.default.createElement(_TextField2.default, {
        style: { marginTop: 20 },
        hintText: "\u8BF7\u8F93\u5165\u5BC6\u7801",
        floatingLabelText: "\u5BC6\u7801",
        type: "password",
        fullWidth: true
      }), _react2.default.createElement(_RaisedButton2.default, { label: "\u767B\u5F55", fullWidth: true, style: { marginTop: 40 } }), _react2.default.createElement("br", null), _react2.default.createElement("br", null), _react2.default.createElement("p", { onClick: this.githubLogin }, _react2.default.createElement("i", { className: "iconfont icon-github", style: { fontSize: 22 } }), "github\u767B\u9646", _react2.default.createElement("a", { href: "javascript:void(0)" }, "\u6CE8\u518C"))));
    }
  }]);

  return Load;
}(_react.Component);

exports.default = Load;