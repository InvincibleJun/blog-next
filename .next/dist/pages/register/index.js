"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("next\\node_modules\\babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _MuiThemeProvider = require("material-ui/styles/MuiThemeProvider");

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _user = require("../../services/user");

var _input = require("../../components/user/input");

var _input2 = _interopRequireDefault(_input);

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

    _this.sendMailHandler = function () {
      (0, _user.sendMail)({ email: '398955404@qq.com' });
    };

    _this.inputChange = function (value, field) {
      _this.setState((0, _defineProperty3.default)({}, field, value));
    };

    _this.state = {
      username: "",
      password: "",
      passwordAagin: "",
      email: "",
      keyCode: ""
    };
    return _this;
  }

  (0, _createClass3.default)(Load, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          username = _state.username,
          password = _state.password,
          passwordAagin = _state.passwordAagin,
          email = _state.email,
          keyCode = _state.keyCode;

      return _react2.default.createElement(_MuiThemeProvider2.default, null, _react2.default.createElement(_Card.Card, {
        style: {
          width: 400,
          margin: "200px 0 0 1000px ",
          padding: "0 50px 50px"
        }
      }, _react2.default.createElement(_input2.default, {
        value: username,
        field: "username",
        check: [{ trigger: 'Blur', pattern: /^[a-zA-Z0-9\u4e00-\u9fa5]{2,10}$/, msg: '请输入2至8位有效字符' }],
        onChange: this.inputChange,
        placeholder: "\u8BF7\u8F93\u5165\u6635\u79F0",
        label: "\u6635\u79F0"
      }), _react2.default.createElement(_input2.default, {
        value: password,
        field: "password",
        check: [{ trigger: 'Blur', pattern: /^[a-zA-Z0-9]{2,10}$/, msg: '请输入6到20位大小字母和数字' }],
        onChange: this.inputChange,
        placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
        label: "\u5BC6\u7801"
      }), _react2.default.createElement(_input2.default, {
        field: "passwordAagin",
        value: passwordAagin,
        check: [{ trigger: 'Blur', pattern: password, msg: '上述密码不同' }],
        placeholder: "\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801",
        onChange: this.inputChange,
        label: "\u786E\u8BA4\u5BC6\u7801"
      }), _react2.default.createElement(_input2.default, {
        field: "email",
        value: email,
        check: [{ trigger: 'Blur', pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, msg: '请输入正确邮箱' }],
        placeholder: "\u8BF7\u8F93\u5165\u90AE\u7BB1",
        onChange: this.inputChange,
        label: "\u90AE\u7BB1"
      }), _react2.default.createElement(_input2.default, {
        field: "keyCode",
        style: { marginTop: 20, width: 150 },
        value: keyCode,
        check: [{ trigger: 'Blur', pattern: /^\d{6}$/, msg: '请输入六位验证码' }],
        placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
        onChange: this.inputChange,
        label: "\u9A8C\u8BC1\u7801"
      }), _react2.default.createElement(_RaisedButton2.default, { label: "\u70B9\u51FB\u53D1\u9001\u9A8C\u8BC1\u7801", onClick: this.sendMailHandler }), _react2.default.createElement(_RaisedButton2.default, { label: "\u6CE8\u518C", fullWidth: true, style: { marginTop: 40 } })));
    }
  }]);

  return Load;
}(_react.Component);
// import Layout from "../components/Layout";
exports.default = Load;