"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("next\\node_modules\\babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("next\\node_modules\\babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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
          lineNumber: 26
        }
      }, _react2.default.createElement("div", {
        className: "jsx-2215131335",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, data.map(function (art) {
        return _react2.default.createElement(_link2.default, {
          as: "/blog/" + art._id,
          href: "/blog/article?_id=" + art._id,
          key: art.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, _react2.default.createElement("a", {
          className: "jsx-2215131335" + " " + "blog-list",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, _react2.default.createElement("h3", {
          className: "jsx-2215131335",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, art.title), _react2.default.createElement("p", {
          className: "jsx-2215131335" + " " + "article-time",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }, (0, _format2.default)(art.createTime)), _react2.default.createElement("p", {
          className: "jsx-2215131335" + " " + "article-desc",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, art.desc)));
      }), _react2.default.createElement(_style2.default, {
        styleId: "2215131335",
        css: "a.jsx-2215131335{display:block;}h3.jsx-2215131335{color:" + _colors.grey800 + ";}.article-desc.jsx-2215131335{font-size:14px;line-height:20px;}.article-time.jsx-2215131335{margin:15px 0;font-size:14px;color:" + _colors.grey600 + ";}.blog-list.jsx-2215131335{margin-bottom:20px;padding:20px;box-sizing:border-box;border:1px solid " + _colors.lightGreen50 + ";background-color:" + _colors.blueGrey50 + ";border-radius:4px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nXFxpbmRleC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q3NCLEFBRzZCLEFBR3FCLEFBR3BCLEFBSUQsQUFLSyxjQWRyQixBQVVpQixDQUpFLElBU0osVUFKc0IsR0FKckMsQUFTd0IsR0FieEIsbUJBY2dELFVBTGhELG9DQU1nRCw4Q0FDNUIsa0JBQ3BCIiwiZmlsZSI6InBhZ2VzXFxibG9nXFxpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJFOi9ibG9nL2Jsb2ctbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge1xyXG4gIGJsdWVHcmV5NTAsXHJcbiAgbGlnaHRHcmVlbjUwLFxyXG4gIGdyZXk4MDAsXHJcbiAgZ3JleTYwMFxyXG59IGZyb20gXCJtYXRlcmlhbC11aS9zdHlsZXMvY29sb3JzXCI7XHJcbmltcG9ydCB7IGdldEFydGljbGUgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYmxvZ1wiO1xyXG5cclxuaW1wb3J0IGZvcm1hdCBmcm9tIFwiLi4vLi4vdXRpbHMvZm9ybWF0XCI7XHJcbmltcG9ydCBCbG9nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Jsb2dcIjtcclxuXHJcbmNsYXNzIExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEgfSkge1xyXG4gICAgbGV0IHJlcyA9IGF3YWl0IGdldEFydGljbGUoKTtcclxuICAgIGxldCBkYXRhID0gcmVzLmRhdGEuZGF0YTtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIHJldHVybiB7IGRhdGEgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxCbG9nPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoYXJ0ID0+IChcclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBhcz17YC9ibG9nLyR7YXJ0Ll9pZH1gfVxyXG4gICAgICAgICAgICAgIGhyZWY9e2AvYmxvZy9hcnRpY2xlP19pZD0ke2FydC5faWR9YH1cclxuICAgICAgICAgICAgICBrZXk9e2FydC50aXRsZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJsb2ctbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPnthcnQudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFydGljbGUtdGltZVwiPntmb3JtYXQoYXJ0LmNyZWF0ZVRpbWUpfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFydGljbGUtZGVzY1wiPnthcnQuZGVzY308L3A+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGFydC5ib2R5IH19PjwvZGl2PiAqL31cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICR7Z3JleTgwMH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmFydGljbGUtZGVzYyB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hcnRpY2xlLXRpbWUge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICBjb2xvcjogJHtncmV5NjAwfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYmxvZy1saXN0IHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke2xpZ2h0R3JlZW41MH07XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtibHVlR3JleTUwfTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9CbG9nPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3Q7XHJcbiJdfQ== */\n/*@ sourceURL=pages\\blog\\index.js?entry */"
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req;
        var res, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _blog.getArticle)();

              case 2:
                res = _context.sent;
                data = res.data.data;

                if (!data) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", { data: data });

              case 6:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxpbmsiLCJibHVlR3JleTUwIiwibGlnaHRHcmVlbjUwIiwiZ3JleTgwMCIsImdyZXk2MDAiLCJnZXRBcnRpY2xlIiwiZm9ybWF0IiwiQmxvZyIsIkxpc3QiLCJkYXRhIiwicHJvcHMiLCJtYXAiLCJhcnQiLCJfaWQiLCJ0aXRsZSIsImNyZWF0ZVRpbWUiLCJkZXNjIiwicmVxIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFDRSxBQUNBLEFBQ0EsQUFDQTs7QUFFRixBQUFTLEFBQWtCOztBQUUzQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFVOzs7Ozs7Ozs7SUFFWCxBOzs7Ozs7Ozs7Ozs2QkFTSztVQUFBLEFBQ0MsT0FBUyxLQURWLEFBQ2UsTUFEZixBQUNDLEFBQ1I7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsY0FDRyxBQUFLLElBQUksZUFBQTsrQkFDUixBQUFDO3lCQUNjLElBRGYsQUFDbUIsQUFDakI7dUNBQTJCLElBRjdCLEFBRWlDLEFBQy9CO2VBQUssSUFIUCxBQUdXOztzQkFIWDt3QkFBQSxBQUtFO0FBTEY7QUFDRSxTQURGLGtCQUtFLGNBQUE7OENBQUEsQUFBYTs7c0JBQWI7d0JBQUEsQUFDRTtBQURGO0FBQUEsMkJBQ0UsY0FBQTtxQkFBQTs7c0JBQUE7d0JBQUEsQUFBSztBQUFMO0FBQUEsZUFERixBQUNFLEFBQVMsQUFDVCx3QkFBQSxjQUFBOzhDQUFBLEFBQWE7O3NCQUFiO3dCQUFBLEFBQTZCO0FBQTdCO0FBQUEsaUNBQW9DLElBRnRDLEFBRUUsQUFBNkIsQUFBVyxBQUN4Qyw4QkFBQSxjQUFBOzhDQUFBLEFBQWE7O3NCQUFiO3dCQUFBLEFBQTZCO0FBQTdCO0FBQUEsZUFUSSxBQUNSLEFBS0UsQUFHRSxBQUFpQztBQVZ6QyxBQUNHO2lCQURIO2FBQUEsQUFvQmUsK0VBcEJmLEFBNkJlLHVKQTdCZixBQW1DMEIsK0hBbkMxQixBQW9DMEIsNENBdEM5QixBQUNFLEFBQ0UsQUEyQ0w7QUEzQ0s7Ozs7OztZQVp5QixBLFcsQUFBQTs7Ozs7Ozt1QkFDYixBOzttQkFBWjtBLCtCQUNBO0EsdUJBQU8sSUFBQSxBQUFJLEssQUFBSzs7cUIsQUFDaEI7Ozs7O2lEQUNLLEVBQUUsTUFBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTE0sQSxBQTJEbkI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRTovYmxvZy9ibG9nLW5leHQifQ==