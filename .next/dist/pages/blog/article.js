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

var _blog = require("../../components/blog");

var _blog2 = _interopRequireDefault(_blog);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _blog3 = require("../../services/blog");

var _head = require("next\\dist\\lib\\head.js");

var _head2 = _interopRequireDefault(_head);

var _marked = require("marked");

var _marked2 = _interopRequireDefault(_marked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "E:\\blog\\blog-next\\pages\\blog\\article.js?entry";

// import "../../assets/css/github-markdonw.css";

var Article = function (_Component) {
  (0, _inherits3.default)(Article, _Component);

  function Article() {
    (0, _classCallCheck3.default)(this, Article);

    return (0, _possibleConstructorReturn3.default)(this, (Article.__proto__ || (0, _getPrototypeOf2.default)(Article)).apply(this, arguments));
  }

  (0, _createClass3.default)(Article, [{
    key: "render",
    value: function render() {
      var data = this.props.data;

      return _react2.default.createElement(_blog2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement("link", { rel: "stylesheet", href: "/static/css/github-markdonw.css", className: "jsx-3636536621",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      })), _react2.default.createElement("h3", {
        className: "jsx-3636536621",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, data.title), _react2.default.createElement("hr", {
        className: "jsx-3636536621",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: (0, _marked2.default)(data.body) }, className: "jsx-3636536621" + " " + "markdown-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: "3636536621",
        css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nXFxhcnRpY2xlLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCb0IiLCJmaWxlIjoicGFnZXNcXGJsb2dcXGFydGljbGUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRTovYmxvZy9ibG9nLW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmxvZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ibG9nXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0T25lIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Jsb2dcIjtcclxuaW1wb3J0IE5leHRIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IG1hcmtlZCBmcm9tICdtYXJrZWQnO1xyXG4vLyBpbXBvcnQgXCIuLi8uLi9hc3NldHMvY3NzL2dpdGh1Yi1tYXJrZG9udy5jc3NcIjtcclxuY2xhc3MgQXJ0aWNsZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSwgcXVlcnkgfSkge1xyXG4gICAgY29uc3QgeyBfaWQgfSA9IHJlcSA/IHJlcS5wYXJhbXMgOiBxdWVyeTtcclxuICAgIGlmIChfaWQpIHtcclxuICAgICAgbGV0IHJlcyA9IGF3YWl0IGdldE9uZSh7IF9pZCB9KTtcclxuICAgICAgcmV0dXJuIHsgZGF0YTogcmVzLmRhdGEuZGF0YSB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgIH1cclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEJsb2c+XHJcbiAgICAgICAgPE5leHRIZWFkPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3RhdGljL2Nzcy9naXRodWItbWFya2RvbncuY3NzXCIgLz5cclxuICAgICAgICA8L05leHRIZWFkPlxyXG4gICAgICAgIDxoMz57ZGF0YS50aXRsZX08L2gzPlxyXG4gICAgICAgIDxociAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFya2Rvd24tYm9keVwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWFya2VkKGRhdGEuYm9keSkgfX0gLz5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L0Jsb2c+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZTtcclxuIl19 */\n/*@ sourceURL=pages\\blog\\article.js?entry */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req,
            query = _ref.query;

        var _ref3, _id, res;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ref3 = req ? req.params : query, _id = _ref3._id;

                if (!_id) {
                  _context.next = 8;
                  break;
                }

                _context.next = 4;
                return (0, _blog3.getOne)({ _id: _id });

              case 4:
                res = _context.sent;
                return _context.abrupt("return", { data: res.data.data });

              case 8:
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

  return Article;
}(_react.Component);

exports.default = Article;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nXFxhcnRpY2xlLmpzIl0sIm5hbWVzIjpbIkJsb2ciLCJSZWFjdCIsIkNvbXBvbmVudCIsImdldE9uZSIsIk5leHRIZWFkIiwibWFya2VkIiwiQXJ0aWNsZSIsImRhdGEiLCJwcm9wcyIsInRpdGxlIiwiX19odG1sIiwiYm9keSIsInJlcSIsInF1ZXJ5IiwicGFyYW1zIiwiX2lkIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFjOztBQUN2QixBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7QUFDUDs7SSxBQUNNOzs7Ozs7Ozs7Ozs2QkFTSztVQUFBLEFBQ0MsT0FBUyxLQURWLEFBQ2UsTUFEZixBQUNDLEFBQ1I7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsaURBQ1EsS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEIsOENBQTVCOztvQkFBQTtzQkFGSixBQUNFLEFBQ0UsQUFFRjtBQUZFOzJCQUVGLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQUs7QUFBTDtBQUFBLGNBSkYsQUFJRSxBQUFVLEFBQ1Y7bUJBQUE7O29CQUFBO3NCQUxGLEFBS0UsQUFDQTtBQURBO0FBQUEsaURBQytCLHlCQUF5QixFQUFFLFFBQVEsc0JBQU8sS0FBekUsQUFBd0QsQUFBVSxBQUFZLDZDQUE5RSxBQUFlOztvQkFBZjtzQkFORixBQU1FO0FBQUE7O2lCQU5GO2FBREYsQUFDRSxBQVlIO0FBWkc7Ozs7OztZQVgyQixBLFdBQUEsQTtZLEFBQUssYUFBQSxBOzs7Ozs7Ozt3QkFDbEIsTUFBTSxJQUFOLEFBQVUsU0FBUyxBLE9BQTNCLEEsWSxBQUFBOztxQixBQUNKOzs7Ozs7dUJBQ2MsbUJBQU8sRUFBRSxLQUFULEEsQUFBTzs7bUJBQW5CO0E7aURBQ0csRUFBRSxNQUFNLElBQUEsQUFBSSxLQUFaLEEsQUFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFMUixBLEFBMkJ0Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJhcnRpY2xlLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkU6L2Jsb2cvYmxvZy1uZXh0In0=