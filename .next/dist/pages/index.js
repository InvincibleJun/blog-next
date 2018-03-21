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

var _FontIcon = require("material-ui/FontIcon");

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _colors = require("material-ui/styles/colors");

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement("div", {
        className: "jsx-3596446060" + " " + "container animated fadeIn"
      }, _react2.default.createElement("div", {
        className: "jsx-3596446060" + " " + "cover"
      }), _react2.default.createElement("div", {
        className: "jsx-3596446060" + " " + "word animated fadeInLeft"
      }, "may the force be with you")), _react2.default.createElement("div", {
        className: "jsx-3596446060" + " " + "motto animated fadeIn"
      }, "\xA0\xA0\xA0\xA0\xA0\xA0\u751F\u6D3B\u4E0D\u80FD\u7B49\u5F85\u522B\u4EBA\u6765\u5B89\u6392\uFF0C\u8981\u81EA\u5DF1\u53BB\u4E89\u53D6\u548C\u594B\u6597\uFF1B\u800C\u4E0D\u8BBA\u5176\u7ED3\u679C\u662F\u559C\u662F\u60B2\uFF0C\u4F46\u53EF\u4EE5\u6170\u85C9\u7684\u662F\uFF0C\u4F60\u603B\u4E0D\u6789\u5728\u8FD9\u4E16\u754C\u4E0A\u6D3B\u4E86\u4E00\u573A\u3002", _react2.default.createElement("br", {
        className: "jsx-3596446060"
      }), "\xA0\xA0\xA0\xA0\xA0\xA0\u6709\u4E86\u8FD9\u6837\u7684\u8BA4\u8BC6\uFF0C\u4F60\u5C31\u4F1A\u73CD\u91CD\u751F\u6D3B\uFF0C\u800C\u4E0D\u4F1A\u73A9\u4E16\u4E0D\u606D\uFF1B\u540C\u65F6\uFF0C\u4E5F\u4F1A\u7ED9\u4EBA\u81EA\u8EAB\u6CE8\u5165\u4E00\u79CD\u5F3A\u5927\u7684\u5185\u5728\u529B\u91CF\u3002", _react2.default.createElement("br", {
        className: "jsx-3596446060"
      }), _react2.default.createElement("small", {
        className: "jsx-3596446060"
      }, "\u2014\u2014\u300A\u5E73\u51E1\u7684\u4E16\u754C\u300B")), _react2.default.createElement(_style2.default, {
        styleId: "3596446060",
        css: [".container.jsx-3596446060{background-image:url(./static/image/home-bg.jpg);background-size:cover;background-position:50% 50%;height:500px;position:relative;-webkit-animation-duration:3s;animation-duration:3s;z-index:-1;overflow:hidden;}", ".word.jsx-3596446060{font-size:40px;color:white;position:relative;z-index:1;margin-top:200px;text-align:center;font-family:'Open Sans','Helvetica Neue',Helvetica,Ari;}", ".cover.jsx-3596446060{background-color:#212529;opacity:.5;position:absolute;width:100%;height:500px;}", ".motto.jsx-3596446060{width:400px;margin:50px auto;line-height:40px;font-weight:normal;}", "small.jsx-3596446060{display:block;text-align:right;}"]
      }));
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;