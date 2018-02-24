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

var _link = require("next\\dist\\lib\\link.js");

var _link2 = _interopRequireDefault(_link);

var _colors = require("material-ui/styles/colors");

var _blog = require("../../services/blog");

var _format = require("../../utils/format");

var _format2 = _interopRequireDefault(_format);

var _blog2 = require("../../components/blog");

var _blog3 = _interopRequireDefault(_blog2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "E:\\blog\\blog-next\\pages\\blog\\index.js?entry";


var List = function (_Component) {
  (0, _inherits3.default)(List, _Component);

  function List() {
    (0, _classCallCheck3.default)(this, List);

    return (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).apply(this, arguments));
  }

  (0, _createClass3.default)(List, [{
    key: "render",
    value: function render() {
      var data = this.props.data;

      return _react2.default.createElement(_blog3.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement("div", {
        className: "jsx-3045910694" + " " + "list-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, data.map(function (art) {
        return _react2.default.createElement(_link2.default, { as: "/blog/" + art._id, href: "/blog/article", key: art.title, className: "blog-list", __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, _react2.default.createElement("a", {
          className: "jsx-3045910694",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, _react2.default.createElement("h3", {
          className: "jsx-3045910694",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }, art.title), _react2.default.createElement("p", {
          className: "jsx-3045910694" + " " + "article-time",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, (0, _format2.default)(art.createTime)), _react2.default.createElement("p", {
          className: "jsx-3045910694" + " " + "article-desc",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, art.desc)));
      }), _react2.default.createElement(_style2.default, {
        styleId: "3045910694",
        css: "a.jsx-3045910694{display:block;}.list-container.jsx-3045910694{width:800px;}h3.jsx-3045910694{color:" + _colors.grey800 + ";}.article-desc.jsx-3045910694{font-size:14px;line-height:20px;}.article-time.jsx-3045910694{margin:15px 0;font-size:14px;color:" + _colors.grey600 + ";}.blog-list.jsx-3045910694{margin-bottom:20px;padding:20px;box-sizing:border-box;border:1px solid " + _colors.lightGreen50 + ";background-color:" + _colors.blueGrey50 + ";border-radius:4px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nXFxpbmRleC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ3NCLEFBR3lCLEFBR0YsQUFJZixBQUVrQixBQUlELEFBS0ssWUFkckIsRUFIQSxBQWFpQixDQUpFLElBU0osVUFIaEIsR0FMQyxBQVN3QixHQWJ4QixtQkFjZ0QsVUFMaEQsb0NBTWdELDhDQUM1QixrQkFDcEIiLCJmaWxlIjoicGFnZXNcXGJsb2dcXGluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkU6L2Jsb2cvYmxvZy1uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge1xyXG4gIGJsdWVHcmV5NTAsXHJcbiAgbGlnaHRHcmVlbjUwLFxyXG4gIGdyZXk4MDAsXHJcbiAgZ3JleTYwMFxyXG59IGZyb20gXCJtYXRlcmlhbC11aS9zdHlsZXMvY29sb3JzXCI7XHJcbmltcG9ydCB7IGdldEFydGljbGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ibG9nJ1xyXG5cclxuaW1wb3J0IGZvcm1hdCBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQnXHJcbmltcG9ydCBCbG9nIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYmxvZydcclxuXHJcbmNsYXNzIExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEgfSkge1xyXG4gICAgbGV0IHJlcyA9IGF3YWl0IGdldEFydGljbGUoKTtcclxuICAgIGlmIChyZXMpIHtcclxuICAgICAgcmV0dXJuIHsgZGF0YTogcmVzLmRhdGEuZGF0YSB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QmxvZz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGRhdGEubWFwKGFydCA9PiAoXHJcbiAgICAgICAgICAgICAgPExpbmsgYXM9e2AvYmxvZy8ke2FydC5faWR9YH0gaHJlZj0nL2Jsb2cvYXJ0aWNsZScga2V5PXthcnQudGl0bGV9IGNsYXNzTmFtZT1cImJsb2ctbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz57YXJ0LnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYXJ0aWNsZS10aW1lJz57Zm9ybWF0KGFydC5jcmVhdGVUaW1lKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYXJ0aWNsZS1kZXNjJz57YXJ0LmRlc2N9PC9wPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGFydC5ib2R5IH19PjwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpc3QtY29udGFpbmVye1xyXG4gICAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBjb2xvcjogJHtncmV5ODAwfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYXJ0aWNsZS1kZXNje1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgLmFydGljbGUtdGltZXtcclxuICAgICAgICAgIG1hcmdpbjogMTVweCAwOyAgICAgICAgICBcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGNvbG9yOiAke2dyZXk2MDB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ibG9nLWxpc3R7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke2xpZ2h0R3JlZW41MH07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JsdWVHcmV5NTB9O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQmxvZz5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3Q7XHJcbiJdfQ== */\n/*@ sourceURL=pages\\blog\\index.js?entry */"
      })));
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

                return _context.abrupt("return", { data: res.data.data });

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

  return List;
}(_react.Component);

exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxpbmsiLCJibHVlR3JleTUwIiwibGlnaHRHcmVlbjUwIiwiZ3JleTgwMCIsImdyZXk2MDAiLCJnZXRBcnRpY2xlIiwiZm9ybWF0IiwiQmxvZyIsIkxpc3QiLCJkYXRhIiwicHJvcHMiLCJtYXAiLCJhcnQiLCJfaWQiLCJ0aXRsZSIsImNyZWF0ZVRpbWUiLCJkZXNjIiwicmVxIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFDRSxBQUNBLEFBQ0EsQUFDQTs7QUFFRixBQUFTLEFBQWtCOztBQUUzQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFVOzs7Ozs7Ozs7SSxBQUVYOzs7Ozs7Ozs7Ozs2QkFRSztVQUFBLEFBQ0MsT0FBUyxLQURWLEFBQ2UsTUFEZixBQUNDLEFBQ1I7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUVJO0FBRko7QUFBQSxjQUVJLEFBQUssSUFBSSxlQUFBOytCQUNQLEFBQUMsZ0NBQUssZUFBYSxJQUFuQixBQUF1QixLQUFPLE1BQTlCLEFBQW1DLGlCQUFnQixLQUFLLElBQXhELEFBQTRELE9BQU8sV0FBbkUsQUFBNkU7c0JBQTdFO3dCQUFBLEFBQ0U7QUFERjtTQUFBLGtCQUNFLGNBQUE7cUJBQUE7O3NCQUFBO3dCQUFBLEFBQ0U7QUFERjtBQUFBLDJCQUNFLGNBQUE7cUJBQUE7O3NCQUFBO3dCQUFBLEFBQUs7QUFBTDtBQUFBLGVBREYsQUFDRSxBQUFTLEFBQ1Qsd0JBQUEsY0FBQTs4Q0FBQSxBQUFhOztzQkFBYjt3QkFBQSxBQUE2QjtBQUE3QjtBQUFBLGlDQUFvQyxJQUZ0QyxBQUVFLEFBQTZCLEFBQVcsQUFDeEMsOEJBQUEsY0FBQTs4Q0FBQSxBQUFhOztzQkFBYjt3QkFBQSxBQUE2QjtBQUE3QjtBQUFBLGVBTEcsQUFDUCxBQUNFLEFBR0UsQUFBaUM7QUFQM0MsQUFFSTtpQkFGSjthQUFBLEFBcUJXLDJIQXJCWCxBQThCVyx1SkE5QlgsQUFvQ3NCLCtIQXBDdEIsQUFxQ3NCLDRDQXZDMUIsQUFDRSxBQUNFLEFBNENMO0FBNUNLOzs7Ozs7WUFYeUIsQSxXQUFBLEE7Ozs7Ozs7dUJBQ2IsQTs7bUJBQVo7QTs7cUJBQ0EsQTs7Ozs7aURBQ0ssRUFBRSxNQUFNLElBQUEsQUFBSSxLQUFaLEFBQWlCLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFKWCxBLEFBMkRuQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJFOi9ibG9nL2Jsb2ctbmV4dCJ9