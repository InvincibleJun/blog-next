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

var _jsxFileName = "E:\\blog\\blog-next\\components\\nav.js";


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

      return _react2.default.createElement("div", { ref: "title", className: "jsx-3788501849" + " " + ("animated " + (isCustom ? '' : 'fadeInDown')),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement("p", {
        className: "jsx-3788501849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, "Jarvan's Blog"), _react2.default.createElement("ul", {
        className: "jsx-3788501849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(_link2.default, { href: "/", __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement("a", {
        className: "jsx-3788501849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, "Home")), _react2.default.createElement(_link2.default, { href: "/blog", __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement("a", {
        className: "jsx-3788501849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "Blog"))), _react2.default.createElement(_style2.default, {
        styleId: "3788501849",
        css: "div.jsx-3788501849{line-height:40px;height:40px;box-shadow:rgba(0,0,0,0.16) 0px 3px 10px,rgba(0,0,0,0.23) 0px 3px 10px;}p.jsx-3788501849{float:left;color:white;text-align:center;font-size:14px;width:120px;background-color:black;}ul.jsx-3788501849{height:40px;background-color:#fff;marigin-left:120px;padding-right:200px;}a.jsx-3788501849{float:right;width:100px;margin:0 10px;font-size:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXG5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Qm9CLEFBRzhCLEFBS04sQUFRQyxBQU1BLFdBYkEsQ0FRVSxBQU1WLEtBbkJBLE1BTU0sQ0FjSixLQW5CZ0UsS0FhM0QsSUFPSixHQWRBLFlBUUssQUFPdEIsR0FkYyxZQUNXLEtBT3pCLGtCQU5BLFNBUkEiLCJmaWxlIjoiY29tcG9uZW50c1xcbmF2LmpzIiwic291cmNlUm9vdCI6IkU6L2Jsb2cvYmxvZy1uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5sZXQgaXNDdXN0b20gPSBmYWxzZTtcclxuY2xhc3MgTWVudSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBpc0N1c3RvbVxyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGlzQ3VzdG9tID0gdHJ1ZTtcclxuICAgIHRoaXMucmVmc1sndGl0bGUnXS5hZGRFdmVudExpc3RlbmVyKFwid2Via2l0QW5pbWF0aW9uRW5kXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzQ3VzdG9tIH0pXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBpc0N1c3RvbSB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BhbmltYXRlZCAke2lzQ3VzdG9tID8gJycgOiAnZmFkZUluRG93bid9YH0gcmVmPVwidGl0bGVcIj5cclxuICAgICAgICA8cD5KYXJ2YW4ncyBCbG9nPC9wPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhPkhvbWU8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2dcIj5cclxuICAgICAgICAgICAgPGE+QmxvZzwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDNweCAxMHB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAgICAgIFxyXG4gICAgICAgICAgICBtYXJpZ2luLWxlZnQ6IDEyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnU7XHJcbiJdfQ== */\n/*@ sourceURL=components\\nav.js */"
      }));
    }
  }]);

  return Menu;
}(_react.Component);

exports.default = Menu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXG5hdi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInN0eWxlZCIsIkxpbmsiLCJpc0N1c3RvbSIsIk1lbnUiLCJzdGF0ZSIsInJlZnMiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBSSxXQUFKLEFBQWU7O0lBQ1QsQTs7Ozs7Ozs7Ozs7Ozs7d01BQ0osQTtnQkFBUSxBO0FBQUEsQUFDTjs7Ozs7d0NBRWtCO21CQUNsQjs7aUJBQUEsQUFBVyxBQUNYO1dBQUEsQUFBSyxLQUFMLEFBQVUsU0FBVixBQUFtQixpQkFBbkIsQUFBb0Msc0JBQXNCLFlBQU0sQUFDOUQ7ZUFBQSxBQUFLLFNBQVMsRUFBRSxVQUFoQixBQUFjLEFBQ2Y7QUFGRCxBQUdEOzs7OzZCQUNRO1VBQUEsQUFDQyxXQUFhLEtBRGQsQUFDbUIsTUFEbkIsQUFDQyxBQUNSOzs2QkFDRSxjQUFBLFNBQTRELEtBQTVELEFBQWdFLDZEQUFwQyxXQUFBLEFBQVcsS0FBdkMsQUFBNEM7O29CQUE1QztzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esa0NBQUEsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUZKLEFBQ0UsQUFDRSxBQUVGLDBCQUFBLEFBQUMsZ0NBQUssTUFBTixBQUFXO29CQUFYO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FQTixBQUVFLEFBSUUsQUFDRTtpQkFQTjthQURGLEFBQ0UsQUF1Q0g7QUF2Q0c7Ozs7O0FBYmEsQSxBQXVEbkI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmF2LmpzIiwic291cmNlUm9vdCI6IkU6L2Jsb2cvYmxvZy1uZXh0In0=