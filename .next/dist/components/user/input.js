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

var _TextField = require("material-ui/TextField");

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function (_Component) {
  (0, _inherits3.default)(Input, _Component);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).call.apply(_ref, [this].concat(args))), _this), _this.change = function (e) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          field = _this$props.field;

      e.preventDefault();
      var value = e.target.value;
      onChange && field && onChange(value, field);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Input, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          label = _props.label,
          placeholder = _props.placeholder,
          style = _props.style,
          check = _props.check,
          value = _props.value,
          change = _props.change,
          errorText = _props.errorText;
      // let action = {}
      // check && check.forEach(c => {
      //   let { trigger, pattern, msg, errorText } = c
      //   action['on' + trigger] = (e) => {
      //     e.preventDefault();
      //     if (typeof pattern === 'string') {
      //       pattern = new RegExp('^' + pattern + '$')
      //     }
      //     let value = e.target.value
      //     this.setState({ errorText: pattern.test(value) ? '' : msg })
      //   }
      // })

      return _react2.default.createElement(_TextField2.default, {
        value: value,
        errorText: errorText,
        hintText: placeholder,
        floatingLabelText: label
        // {...action}
        , style: style,
        fullWidth: true,
        onChange: this.change
      });
    }
  }]);

  return Input;
}(_react.Component);

Input.state = false;

exports.default = Input;