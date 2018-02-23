"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _list = require("../components/blog/list");

var _list2 = _interopRequireDefault(_list);

var _colors = require("material-ui/styles/colors");

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _css = require("styled-jsx/css");

var _css2 = _interopRequireDefault(_css);

var _blog = require("../services/blog");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "E:\\blog\\blog-next\\pages\\blog.js?entry";


var Blog = function (_Component) {
  (0, _inherits3.default)(Blog, _Component);

  function Blog() {
    (0, _classCallCheck3.default)(this, Blog);

    return (0, _possibleConstructorReturn3.default)(this, (Blog.__proto__ || (0, _getPrototypeOf2.default)(Blog)).apply(this, arguments));
  }

  (0, _createClass3.default)(Blog, [{
    key: "render",
    value: function render() {
      var list = this.props.list;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement("div", {
        className: "jsx-1072645673" + " " + "blog-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "header", this.props.userAgent), _react2.default.createElement("div", {
        className: "jsx-1072645673" + " " + "blog-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement("div", {
        className: "jsx-1072645673" + " " + "blog-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement("div", {
        className: "jsx-1072645673" + " " + "chunk-border blog-user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement("div", {
        className: "jsx-1072645673" + " " + "chunk-border blog-user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      })), _react2.default.createElement("div", {
        className: "jsx-1072645673" + " " + "chunk-border blog-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(_list2.default, { data: list, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }))), _react2.default.createElement(_style2.default, {
        styleId: "1072645673",
        css: ".blog-header.jsx-1072645673{background-color:" + _colors.blue500 + ";height:80px;}.blog-container.jsx-1072645673{width:1080px;margin:20px auto;background-color:" + _colors.green50 + ";position:relative;overflow:auto;}.blog-info.jsx-1072645673{width:260px;float:right;right:0;top:0;height:800px;background-color:" + _colors.amber500 + ";}.blog-user.jsx-1072645673{height:300px;background-color:" + _colors.blueGrey500 + ";margin-bottom:20px;}.blog-list.jsx-1072645673{width:800px;height:400px;background-color:" + _colors.amber500 + ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDb0IsQUFHMkQsQUFJakMsQUFPRCxBQVFDLEFBS0QsWUFaQSxBQWFDLENBcEJJLEFBZTZCLFdBUHRDLENBYXNDLEtBcEJBLEVBUXhDLE1BQ08sUUFkRCxLQWVrQyxPQWRoRCxDQW1CcUIsWUFNckIsS0FwQm9CLEVBZXBCLGdCQWRnQixHQVNoQixXQVJBIiwiZmlsZSI6InBhZ2VzXFxibG9nLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkU6L2Jsb2cvYmxvZy1uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9ibG9nL2xpc3RcIjtcclxuaW1wb3J0IHtcclxuICBibHVlNTAwLFxyXG4gIGdyZWVuNTAsXHJcbiAgYW1iZXI1MDAsXHJcbiAgYmx1ZUdyZXk1MDBcclxufSBmcm9tIFwibWF0ZXJpYWwtdWkvc3R5bGVzL2NvbG9yc1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xyXG5cclxuaW1wb3J0IHsgZ2V0QXJ0aWNsZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Jsb2cnXHJcbmltcG9ydCBsaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL2Jsb2cvbGlzdFwiO1xyXG5cclxuY2xhc3MgQmxvZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSB9KSB7XHJcbiAgICBsZXQgcmVzID0gYXdhaXQgZ2V0QXJ0aWNsZSgpO1xyXG4gICAgaWYgKHJlcykge1xyXG4gICAgICByZXR1cm4geyBsaXN0OiByZXMuZGF0YS5kYXRhIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBsaXN0IH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDwgTGF5b3V0ID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctaGVhZGVyXCI+aGVhZGVye3RoaXMucHJvcHMudXNlckFnZW50fTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2h1bmstYm9yZGVyIGJsb2ctdXNlclwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2h1bmstYm9yZGVyIGJsb2ctdXNlclwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2h1bmstYm9yZGVyIGJsb2ctbGlzdFwiPlxyXG4gICAgICAgICAgICA8TGlzdCBkYXRhPXtsaXN0fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmJsb2ctaGVhZGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtibHVlNTAwfTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJsb2ctY29udGFpbmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwODBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Z3JlZW41MH07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmxvZy1pbmZvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogODAwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7YW1iZXI1MDB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJsb2ctdXNlciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Ymx1ZUdyZXk1MDB9O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJsb2ctbGlzdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHthbWJlcjUwMH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L0xheW91dCA+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZztcclxuIl19 */\n/*@ sourceURL=pages\\blog.js?entry */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req;
        var res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _blog.getArticle)();

              case 2:
                res = _context.sent;

                if (!res) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", { list: res.data.data });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Blog;
}(_react.Component);

exports.default = Blog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwic3R5bGVkIiwiTGlzdCIsImJsdWU1MDAiLCJncmVlbjUwIiwiYW1iZXI1MDAiLCJibHVlR3JleTUwMCIsIkxheW91dCIsImNzcyIsImdldEFydGljbGUiLCJsaXN0IiwiQmxvZyIsInByb3BzIiwidXNlckFnZW50IiwicmVxIiwicmVzIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7OztBQUNQLEFBQU8sQUFBVTs7OztBQUNqQixBQUNFLEFBQ0EsQUFDQSxBQUNBOztBQUVGLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7O0FBRVAsQUFBUyxBQUFrQixBQUMzQixBQUFPLEFBQVU7Ozs7Ozs7SUFFWCxBOzs7Ozs7Ozs7Ozs2QkFPSztVQUFBLEFBQ0MsT0FBUyxLQURWLEFBQ2UsTUFEZixBQUNDLEFBRVI7OzZCQUNFLEFBQUU7O29CQUFGO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQTtBQUFBO0FBQUEsU0FBb0MsZUFBQSxBQUFLLE1BRDNDLEFBQ0UsQUFBK0MsQUFDL0MsNEJBQUEsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBOzRDQUNFLEFBQWU7O29CQUFmO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUE7NENBQ0EsQUFBZTs7b0JBQWY7c0JBSEosQUFDRSxBQUVFLEFBRUY7QUFGRTtBQUFBLDJCQUVGLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxnQ0FBSyxNQUFOLEFBQVk7b0JBQVo7c0JBUk4sQUFFRSxBQUtFLEFBQ0U7QUFBQTs7aUJBUk47YUFBQSxBQWEwQixvRUFiMUIsQUFtQjBCLG1IQW5CMUIsQUE2QjBCLHdKQTdCMUIsQUFpQzBCLHFGQWpDMUIsQUF1QzBCLGlIQXhDNUIsQUFDRSxBQTRDSDtBQTVDRzs7Ozs7O1lBVjJCLEEsV0FBQSxBOzs7Ozs7O3VCQUNiLEE7O21CQUFaO0E7O3FCQUNBLEE7Ozs7O2lEQUNLLEVBQUUsTUFBTSxJQUFBLEFBQUksS0FBWixBQUFpQixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSlgsQSxBQTBEbkI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiYmxvZy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJFOi9ibG9nL2Jsb2ctbmV4dCJ9