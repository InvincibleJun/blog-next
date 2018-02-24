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

var _jsxFileName = "E:\\blog\\blog-next\\components\\blog\\index.js";


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
          lineNumber: 23
        }
      }, _react2.default.createElement("div", {
        className: "jsx-3862571487" + " " + "blog-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, "header", this.props.userAgent), _react2.default.createElement("div", {
        className: "jsx-3862571487" + " " + "blog-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement("div", {
        className: "jsx-3862571487" + " " + "blog-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement("div", {
        className: "jsx-3862571487" + " " + "chunk-border blog-user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement("div", {
        className: "jsx-3862571487" + " " + "chunk-border blog-user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      })), this.props.children), _react2.default.createElement(_style2.default, {
        styleId: "3862571487",
        css: ".blog-header.jsx-3862571487{background-color:" + _colors.blue500 + ";height:80px;}.blog-container.jsx-3862571487{width:1080px;margin:20px auto;position:relative;overflow:auto;}.blog-info.jsx-3862571487{width:260px;float:right;right:0;top:0;height:800px;background-color:" + _colors.amber500 + ";}.blog-user.jsx-3862571487{height:300px;background-color:" + _colors.blueGrey500 + ";margin-bottom:20px;}.blog-list.jsx-3862571487{width:800px;height:400px;background-color:" + _colors.amber500 + ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGJsb2dcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCb0IsQUFHNkQsQUFJakMsQUFNRCxBQVFDLEFBS0QsWUFaQSxBQWFDLENBbkJJLEFBYzZCLFdBUHRDLENBYXNDLEtBbkI1QixFQU9aLE1BQ08sUUFiRCxFQU1FLEdBUWdDLE9BYmhELENBa0JxQixHQVpyQixTQWtCQSxPQUxBLG1CQUxBIiwiZmlsZSI6ImNvbXBvbmVudHNcXGJsb2dcXGluZGV4LmpzIiwic291cmNlUm9vdCI6IkU6L2Jsb2cvYmxvZy1uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIGJsdWU1MDAsXHJcbiAgZ3JlZW41MCxcclxuICBhbWJlcjUwMCxcclxuICBibHVlR3JleTUwMFxyXG59IGZyb20gXCJtYXRlcmlhbC11aS9zdHlsZXMvY29sb3JzXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcblxyXG5pbXBvcnQgeyBnZXRBcnRpY2xlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYmxvZydcclxuXHJcbmNsYXNzIEJsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIC8vIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEgfSkge1xyXG4gIC8vICAgbGV0IHJlcyA9IGF3YWl0IGdldEFydGljbGUoKTtcclxuICAvLyAgIGlmIChyZXMpIHtcclxuICAvLyAgICAgcmV0dXJuIHsgbGlzdDogcmVzLmRhdGEuZGF0YSB9XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgbGlzdCB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8IExheW91dCA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWhlYWRlclwiPmhlYWRlcnt0aGlzLnByb3BzLnVzZXJBZ2VudH08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctaW5mb1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNodW5rLWJvcmRlciBibG9nLXVzZXJcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNodW5rLWJvcmRlciBibG9nLXVzZXJcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5ibG9nLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtibHVlNTAwfTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJsb2ctY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTA4MHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYmxvZy1pbmZvIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMjYwcHg7XHJcbiAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDgwMHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7YW1iZXI1MDB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ibG9nLXVzZXIge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtibHVlR3JleTUwMH07XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYmxvZy1saXN0IHtcclxuICAgICAgICAgICAgICB3aWR0aDogODAwcHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2FtYmVyNTAwfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L0xheW91dCA+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZzsiXX0= */\n/*@ sourceURL=components\\blog\\index.js */"
      }));
    }
  }]);

  return Blog;
}(_react.Component);

exports.default = Blog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGJsb2dcXGluZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiYmx1ZTUwMCIsImdyZWVuNTAiLCJhbWJlcjUwMCIsImJsdWVHcmV5NTAwIiwiTGF5b3V0IiwiZ2V0QXJ0aWNsZSIsIkJsb2ciLCJsaXN0IiwicHJvcHMiLCJ1c2VyQWdlbnQiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQ0UsQUFDQSxBQUNBLEFBQ0E7O0FBRUYsQUFBTyxBQUFZOzs7O0FBRW5CLEFBQVMsQUFBa0I7Ozs7Ozs7SSxBQUVyQjs7Ozs7Ozs7OztTQUNKOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OzZCQUNTO1VBQUEsQUFDQyxPQUFTLEtBRFYsQUFDZSxNQURmLEFBQ0MsQUFFUjs7NkJBQ0UsQUFBRTs7b0JBQUY7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBO0FBQUE7QUFBQSxTQUFvQyxlQUFBLEFBQUssTUFEM0MsQUFDRSxBQUErQyxBQUMvQyw0QkFBQSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUE7NENBQ0UsQUFBZTs7b0JBQWY7c0JBREYsQUFDRSxBQUNBO0FBREE7QUFBQTs0Q0FDQSxBQUFlOztvQkFBZjtzQkFISixBQUNFLEFBRUUsQUFFRDtBQUZDO0FBQUEsZ0JBRUQsQUFBSyxNQVBWLEFBRUUsQUFLYztpQkFQaEI7YUFBQSxBQVc0QixvRUFYNUIsQUEwQjRCLGtPQTFCNUIsQUE4QjRCLHFGQTlCNUIsQUFvQzRCLGlIQXJDOUIsQUFDRSxBQXlDSDtBQXpDRzs7Ozs7QUFYYSxBLEFBdURuQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJFOi9ibG9nL2Jsb2ctbmV4dCJ9