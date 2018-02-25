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

var _blog = require("../../services/blog");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "E:\\blog-next\\components\\blog\\index.js";


var Blog = function (_Component) {
  (0, _inherits3.default)(Blog, _Component);

  function Blog() {
    (0, _classCallCheck3.default)(this, Blog);

    return (0, _possibleConstructorReturn3.default)(this, (Blog.__proto__ || (0, _getPrototypeOf2.default)(Blog)).apply(this, arguments));
  }

  (0, _createClass3.default)(Blog, [{
    key: "render",

    // static async getInitialProps({ req }) {
    //   let res = await getArticle();
    //   if (res) {
    //     return { list: res.data.data }
    //   }
    // }
    value: function render() {
      var list = this.props.list;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement("div", {
        className: "jsx-78890915" + " " + "blog-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement("h4", {
        className: "jsx-78890915",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "may the force be with you!")), _react2.default.createElement("div", {
        className: "jsx-78890915" + " " + "blog-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement("div", {
        className: "jsx-78890915" + " " + "blog-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement("div", {
        className: "jsx-78890915" + " " + "chunk-border blog-user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement("div", {
        className: "jsx-78890915" + " " + "chunk-border blog-user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      })), _react2.default.createElement("div", {
        className: "jsx-78890915" + " " + "blog-main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, this.props.children)), _react2.default.createElement(_style2.default, {
        styleId: "78890915",
        css: ".blog-header.jsx-78890915{background-color:" + _colors.grey900 + ";height:80px;overflow:hidden;}.blog-header.jsx-78890915 h4.jsx-78890915{line-height:80px;margin-left:40px;color:white;}.blog-main.jsx-78890915{width:800px;}.blog-container.jsx-78890915{width:1080px;margin:20px auto 60px;position:relative;}.blog-info.jsx-78890915{width:260px;float:right;right:0;top:0;height:800px;background-color:" + _colors.amber500 + ";}.blog-user.jsx-78890915{height:300px;background-color:" + _colors.blueGrey500 + ";margin-bottom:20px;}.blog-list.jsx-78890915{width:800px;height:400px;background-color:" + _colors.amber500 + ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGJsb2dcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDb0IsQUFHMkQsQUFLN0IsQUFLTCxBQUdDLEFBS0QsQUFRQyxBQUtELFlBcEJkLEFBUWMsQUFhQyxDQWxCUyxBQWF3QixJQXJCN0IsT0FjVCxDQWFzQyxPQVp4QyxFQWRNLENBUU0sR0FPTCxRQXJCRCxBQU9kLEtBZWdELEVBUGhELEtBZGtCLENBMEJHLFlBTXJCLEdBL0JBLElBMEJBLG1CQUxBIiwiZmlsZSI6ImNvbXBvbmVudHNcXGJsb2dcXGluZGV4LmpzIiwic291cmNlUm9vdCI6IkU6L2Jsb2ctbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBibHVlNTAwLFxyXG4gIGdyZWVuNTAsXHJcbiAgZ3JleTkwMCxcclxuICBhbWJlcjUwMCxcclxuICBibHVlR3JleTUwMFxyXG59IGZyb20gXCJtYXRlcmlhbC11aS9zdHlsZXMvY29sb3JzXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcblxyXG5pbXBvcnQgeyBnZXRBcnRpY2xlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Jsb2dcIjtcclxuXHJcbmNsYXNzIEJsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIC8vIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEgfSkge1xyXG4gIC8vICAgbGV0IHJlcyA9IGF3YWl0IGdldEFydGljbGUoKTtcclxuICAvLyAgIGlmIChyZXMpIHtcclxuICAvLyAgICAgcmV0dXJuIHsgbGlzdDogcmVzLmRhdGEuZGF0YSB9XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgbGlzdCB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1oZWFkZXJcIj5cclxuICAgICAgICAgIDxoND5tYXkgdGhlIGZvcmNlIGJlIHdpdGggeW91ITwvaDQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWluZm9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaHVuay1ib3JkZXIgYmxvZy11c2VyXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaHVuay1ib3JkZXIgYmxvZy11c2VyXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLW1haW5cIj57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuYmxvZy1oZWFkZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2dyZXk5MDB9O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmxvZy1oZWFkZXIgaDQge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogODBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ibG9nLW1haW4ge1xyXG4gICAgICAgICAgICB3aWR0aDogODAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmxvZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTA4MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0byA2MHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmxvZy1pbmZvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogODAwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7YW1iZXI1MDB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJsb2ctdXNlciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Ymx1ZUdyZXk1MDB9O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJsb2ctbGlzdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHthbWJlcjUwMH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xyXG4iXX0= */\n/*@ sourceURL=components\\blog\\index.js */"
      }));
    }
  }]);

  return Blog;
}(_react.Component);

exports.default = Blog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGJsb2dcXGluZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiYmx1ZTUwMCIsImdyZWVuNTAiLCJncmV5OTAwIiwiYW1iZXI1MDAiLCJibHVlR3JleTUwMCIsIkxheW91dCIsImdldEFydGljbGUiLCJCbG9nIiwibGlzdCIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUNFLEFBQ0EsQUFDQSxBQUNBLEFBQ0E7O0FBRUYsQUFBTyxBQUFZOzs7O0FBRW5CLEFBQVMsQUFBa0I7Ozs7Ozs7SUFFckIsQTs7Ozs7Ozs7OztTQUNKOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OzZCQUNTO1VBQUEsQUFDQyxPQUFTLEtBRFYsQUFDZSxNQURmLEFBQ0MsQUFFUjs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOzBDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUZKLEFBQ0UsQUFDRSxBQUVGLGdEQUFBLGNBQUE7MENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTswQ0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQTswQ0FDRSxBQUFlOztvQkFBZjtzQkFERixBQUNFLEFBQ0E7QUFEQTtBQUFBOzBDQUNBLEFBQWU7O29CQUFmO3NCQUhKLEFBQ0UsQUFFRSxBQUVGO0FBRkU7QUFBQSwyQkFFRixjQUFBOzBDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQTRCO0FBQTVCO0FBQUEsY0FBNEIsQUFBSyxNQVRyQyxBQUlFLEFBS0UsQUFBdUM7aUJBVDNDO2FBQUEsQUFhMEIsa0VBYjFCLEFBb0MwQixtV0FwQzFCLEFBd0MwQixtRkF4QzFCLEFBOEMwQiwrR0EvQzVCLEFBQ0UsQUFtREg7QUFuREc7Ozs7O0FBWGEsQSxBQWlFbkI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiRTovYmxvZy1uZXh0In0=