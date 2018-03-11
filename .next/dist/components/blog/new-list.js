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

var _jsxFileName = "E:\\blog\\blog-next\\components\\blog\\new-list.js";


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
        className: "jsx-2900454302" + " " + "chunk-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, data.map(function (line) {
        return _react2.default.createElement(_link2.default, { key: line._id, as: "/blog/" + line._id, href: "/blog/article?_id=" + line._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }, _react2.default.createElement("div", {
          className: "jsx-2900454302" + " " + "list-line",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }, line.title, _react2.default.createElement("span", {
          className: "jsx-2900454302",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }, (0, _format2.default)(line.createTime, 'MM-dd'))));
      }), _react2.default.createElement(_style2.default, {
        styleId: "2900454302",
        css: ".list-line.jsx-2900454302{line-height:28px;font-size:14px;cursor:pointer;}.list-line.jsx-2900454302:hover{border-bottom:1px solid #ccc;}span.jsx-2900454302{float:right;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGJsb2dcXG5ldy1saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCb0IsQUFHNEIsQUFLWSxBQUdqQixZQUNHLEtBUkEsVUFTakIsRUFKQSxHQUpnQixlQUNoQiIsImZpbGUiOiJjb21wb25lbnRzXFxibG9nXFxuZXctbGlzdC5qcyIsInNvdXJjZVJvb3QiOiJFOi9ibG9nL2Jsb2ctbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0TmV3TGlzdCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Jsb2cnO1xyXG5pbXBvcnQgZm9ybWF0IGZyb20gXCIuLi8uLi91dGlscy9mb3JtYXRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY2xhc3MgTmV3TGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGF0YTogW11cclxuICAgIH1cclxuICB9XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBnZXROZXdMaXN0KCkudGhlbihyZXMgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogcmVzLmRhdGEuZGF0YSB9KVxyXG4gICAgfSlcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnN0YXRlXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNodW5rLWJvcmRlclwiPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRhdGEubWFwKGxpbmUgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBrZXk9e2xpbmUuX2lkfSBhcz17YC9ibG9nLyR7bGluZS5faWR9YH0gaHJlZj17YC9ibG9nL2FydGljbGU/X2lkPSR7bGluZS5faWR9YH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWxpbmVcIj57bGluZS50aXRsZX08c3Bhbj57Zm9ybWF0KGxpbmUuY3JlYXRlVGltZSwgJ01NLWRkJyl9PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmxpc3QtbGluZSB7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGlzdC1saW5lOmhvdmVyIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld0xpc3Q7XHJcblxyXG4iXX0= */\n/*@ sourceURL=components\\blog\\new-list.js */"
      }));
    }
  }]);

  return NewList;
}(_react.Component);

exports.default = NewList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGJsb2dcXG5ldy1saXN0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZ2V0TmV3TGlzdCIsImZvcm1hdCIsIkxpbmsiLCJOZXdMaXN0IiwicHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJ0aGVuIiwic2V0U3RhdGUiLCJyZXMiLCJtYXAiLCJsaW5lIiwiX2lkIiwidGl0bGUiLCJjcmVhdGVUaW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFrQjs7QUFDM0IsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7Ozs7OztJLEFBRUQ7bUNBQ0o7O21CQUFBLEFBQVksT0FBTzt3Q0FBQTs7d0lBQUEsQUFDWCxBQUNOOztVQUFBLEFBQUs7WUFGWSxBQUVqQixBQUFhLEFBQ0w7QUFESyxBQUNYO1dBRUg7Ozs7O3dDQUNtQjttQkFDbEI7OzhCQUFBLEFBQWEsS0FBSyxlQUFPLEFBQ3ZCO2VBQUEsQUFBSyxTQUFTLEVBQUUsTUFBTSxJQUFBLEFBQUksS0FBMUIsQUFBYyxBQUFpQixBQUNoQztBQUZELEFBR0Q7Ozs7NkJBQ1E7VUFBQSxBQUNDLE9BQVMsS0FEVixBQUNlLE1BRGYsQUFDQyxBQUNSOzs2QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBRUk7QUFGSjtBQUFBLE9BQUEsT0FFSSxBQUFLLElBQUksZ0JBQUE7K0JBQ1AsQUFBQyxnQ0FBSyxLQUFLLEtBQVgsQUFBZ0IsS0FBSyxlQUFhLEtBQWxDLEFBQXVDLEtBQU8sNkJBQTJCLEtBQXpFLEFBQThFO3NCQUE5RTt3QkFBQSxBQUNFO0FBREY7U0FBQSxrQkFDRSxjQUFBOzhDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQTRCO0FBQTVCO0FBQUEsZ0JBQUEsQUFBaUMsQUFBTSx1QkFBQSxjQUFBO3FCQUFBOztzQkFBQTt3QkFBQSxBQUFPO0FBQVA7QUFBQSxpQ0FBYyxLQUFQLEFBQVksWUFGckQsQUFDUCxBQUNFLEFBQXVDLEFBQU8sQUFBd0I7QUFKOUUsQUFFSTtpQkFGSjthQURGLEFBQ0UsQUF3Qkg7QUF4Qkc7Ozs7O0FBZmdCLEEsQUEwQ3RCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy1saXN0LmpzIiwic291cmNlUm9vdCI6IkU6L2Jsb2cvYmxvZy1uZXh0In0=