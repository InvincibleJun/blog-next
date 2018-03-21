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

var _blog = require("../../services/blog");

var _format = require("../../utils/format");

var _format2 = _interopRequireDefault(_format);

var _link = require("next\\dist\\lib\\link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewList = function (_Component) {
  (0, _inherits3.default)(NewList, _Component);

  function NewList(props) {
    (0, _classCallCheck3.default)(this, NewList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NewList.__proto__ || (0, _getPrototypeOf2.default)(NewList)).call(this, props));

    _this.state = {
      data: []
    };
    return _this;
  }

  (0, _createClass3.default)(NewList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      (0, _blog.getNewList)().then(function (res) {
        _this2.setState({ data: res.data.data });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.state.data;

      return _react2.default.createElement("div", {
        className: "jsx-2900454302" + " " + "chunk-border"
      }, data.map(function (line) {
        return _react2.default.createElement(_link2.default, { key: line._id, as: "/blog/" + line._id, href: "/blog/article?_id=" + line._id }, _react2.default.createElement("div", {
          className: "jsx-2900454302" + " " + "list-line"
        }, line.title, _react2.default.createElement("span", {
          className: "jsx-2900454302"
        }, (0, _format2.default)(line.createTime, 'MM-dd'))));
      }), _react2.default.createElement(_style2.default, {
        styleId: "2900454302",
        css: [".list-line.jsx-2900454302{line-height:28px;font-size:14px;cursor:pointer;}", ".list-line.jsx-2900454302:hover{border-bottom:1px solid #ccc;}", "span.jsx-2900454302{float:right;font-size:12px;}"]
      }));
    }
  }]);

  return NewList;
}(_react.Component);

exports.default = NewList;