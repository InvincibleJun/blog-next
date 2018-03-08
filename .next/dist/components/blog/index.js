"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

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

var _jsxFileName = "E:\\blog\\blog-next\\components\\blog\\index.js";


var Blog = function (_Component) {
  (0, _inherits3.default)(Blog, _Component);

  function Blog() {
    (0, _classCallCheck3.default)(this, Blog);

    return (0, _possibleConstructorReturn3.default)(this, (Blog.__proto__ || (0, _getPrototypeOf2.default)(Blog)).apply(this, arguments));
  }

  (0, _createClass3.default)(Blog, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2955065187" + " " + "blog-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement("h4", {
        className: "jsx-2955065187",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, "may the force be with you!")), _react2.default.createElement("div", {
        className: "jsx-2955065187" + " " + "blog-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2955065187" + " " + "blog-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement(_newList2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement("div", {
        className: "jsx-2955065187" + " " + "blog-user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      })), _react2.default.createElement("div", {
        className: "jsx-2955065187" + " " + "blog-main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, this.props.children)), _react2.default.createElement(_style2.default, {
        styleId: "2955065187",
        css: ".blog-header.jsx-2955065187{background-color:" + _colors.grey900 + ";height:80px;overflow:hidden;}.blog-header.jsx-2955065187 h4.jsx-2955065187{line-height:80px;margin-left:40px;color:white;}.blog-main.jsx-2955065187{width:800px;}.blog-container.jsx-2955065187{width:1080px;margin:20px auto 60px;position:relative;}.blog-info.jsx-2955065187{width:260px;float:right;right:0;top:0;height:800px;}.blog-list.jsx-2955065187{width:800px;height:400px;background-color:" + _colors.amber500 + ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGJsb2dcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCb0IsQUFHMkQsQUFLN0IsQUFLTCxBQUdDLEFBS0QsQUFPQSxZQWRkLEFBUWMsQUFPQyxDQVpTLElBUkwsT0FjVCxDQU9zQyxPQU54QyxFQWRNLENBUU0sR0FPTCxRQXJCRCxBQU9kLEtBZUEsRUFQQSxLQWRrQixhQTBCbEIsR0F6QkEiLCJmaWxlIjoiY29tcG9uZW50c1xcYmxvZ1xcaW5kZXguanMiLCJzb3VyY2VSb290IjoiRTovYmxvZy9ibG9nLW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgYmx1ZTUwMCxcclxuICBncmVlbjUwLFxyXG4gIGdyZXk5MDAsXHJcbiAgYW1iZXI1MDAsXHJcbiAgYmx1ZUdyZXk1MDBcclxufSBmcm9tIFwibWF0ZXJpYWwtdWkvc3R5bGVzL2NvbG9yc1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgTmV3TGlzdCBmcm9tICcuL25ldy1saXN0J1xyXG5cclxuY2xhc3MgQmxvZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctaGVhZGVyXCI+XHJcbiAgICAgICAgICA8aDQ+bWF5IHRoZSBmb3JjZSBiZSB3aXRoIHlvdSE8L2g0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxOZXdMaXN0IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy11c2VyXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLW1haW5cIj57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuYmxvZy1oZWFkZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2dyZXk5MDB9O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmxvZy1oZWFkZXIgaDQge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogODBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ibG9nLW1haW4ge1xyXG4gICAgICAgICAgICB3aWR0aDogODAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmxvZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTA4MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0byA2MHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmxvZy1pbmZvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogODAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmxvZy1saXN0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2FtYmVyNTAwfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2c7XHJcbiJdfQ== */\n/*@ sourceURL=components\\blog\\index.js */"
      }));
    }
  }]);

  return Blog;
}(_react.Component);

exports.default = Blog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGJsb2dcXGluZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiYmx1ZTUwMCIsImdyZWVuNTAiLCJncmV5OTAwIiwiYW1iZXI1MDAiLCJibHVlR3JleTUwMCIsIkxheW91dCIsIk5ld0xpc3QiLCJCbG9nIiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQ0UsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7QUFFRixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7Ozs7Ozs7SSxBQUVkOzs7Ozs7Ozs7Ozs2QkFDSyxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGSixBQUNFLEFBQ0UsQUFFRixnREFBQSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQzs7b0JBQUQ7c0JBREYsQUFDRSxBQUNBO0FBREE7QUFBQTs0Q0FDQSxBQUFlOztvQkFBZjtzQkFISixBQUNFLEFBRUUsQUFFRjtBQUZFO0FBQUEsMkJBRUYsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUE0QjtBQUE1QjtBQUFBLGNBQTRCLEFBQUssTUFUckMsQUFJRSxBQUtFLEFBQXVDO2lCQVQzQzthQUFBLEFBYTBCLG9FQWIxQixBQXdDMEIsaWFBekM1QixBQUNFLEFBNkNIO0FBN0NHOzs7OztBQUhhLEEsQUFtRG5COztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6IkU6L2Jsb2cvYmxvZy1uZXh0In0=