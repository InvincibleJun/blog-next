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

var _anchors = require("../../components/blog/anchors");

var _anchors2 = _interopRequireDefault(_anchors);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _blog3 = require("../../services/blog");

var _head = require("next\\dist\\lib\\head.js");

var _head2 = _interopRequireDefault(_head);

var _marked = require("marked");

var _marked2 = _interopRequireDefault(_marked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "E:\\blog-next\\pages\\blog\\article.js?entry";

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
          lineNumber: 20
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement("link", { rel: "stylesheet", href: "/static/css/github-markdonw.css", className: "jsx-1180239077",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      })), _react2.default.createElement("div", {
        className: "jsx-1180239077" + " " + "article-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement(_anchors2.default, { data: data.anchors, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      })), _react2.default.createElement("div", {
        className: "jsx-1180239077" + " " + "chunk-border article-main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement("h3", {
        className: "jsx-1180239077",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, data.title), _react2.default.createElement("hr", {
        className: "jsx-1180239077",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement("div", {
        dangerouslySetInnerHTML: { __html: (0, _marked2.default)(data.body) },
        className: "jsx-1180239077" + " " + "markdown-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: "1180239077",
        css: ".article-main.jsx-1180239077{width:800px;}.article-right.jsx-1180239077{width:260px;float:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nXFxhcnRpY2xlLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDb0IsQUFHeUIsQUFHQSxZQUZkLEFBR2MsWUFDZCIsImZpbGUiOiJwYWdlc1xcYmxvZ1xcYXJ0aWNsZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJFOi9ibG9nLW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmxvZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ibG9nXCI7XHJcbmltcG9ydCBBbmNob3JzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Jsb2cvYW5jaG9yc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldE9uZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9ibG9nXCI7XHJcbmltcG9ydCBOZXh0SGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBtYXJrZWQgZnJvbSBcIm1hcmtlZFwiO1xyXG4vLyBpbXBvcnQgXCIuLi8uLi9hc3NldHMvY3NzL2dpdGh1Yi1tYXJrZG9udy5jc3NcIjtcclxuY2xhc3MgQXJ0aWNsZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSwgcXVlcnkgfSkge1xyXG4gICAgY29uc3QgeyBfaWQgfSA9IHJlcSA/IHJlcS5wYXJhbXMgOiBxdWVyeTtcclxuICAgIGlmIChfaWQpIHtcclxuICAgICAgbGV0IHJlcyA9IGF3YWl0IGdldE9uZSh7IF9pZCB9KTtcclxuICAgICAgcmV0dXJuIHsgZGF0YTogcmVzLmRhdGEuZGF0YSB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgIH1cclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEJsb2c+XHJcbiAgICAgICAgPE5leHRIZWFkPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3RhdGljL2Nzcy9naXRodWItbWFya2RvbncuY3NzXCIgLz5cclxuICAgICAgICA8L05leHRIZWFkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1yaWdodFwiPlxyXG4gICAgICAgICAgPEFuY2hvcnMgZGF0YT17ZGF0YS5hbmNob3JzfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2h1bmstYm9yZGVyIGFydGljbGUtbWFpblwiPlxyXG4gICAgICAgICAgPGgzPntkYXRhLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFya2Rvd24tYm9keVwiXHJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWFya2VkKGRhdGEuYm9keSkgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmFydGljbGUtbWFpbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hcnRpY2xlLXJpZ2h0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L0Jsb2c+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZTtcclxuIl19 */\n/*@ sourceURL=pages\\blog\\article.js?entry */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nXFxhcnRpY2xlLmpzIl0sIm5hbWVzIjpbIkJsb2ciLCJBbmNob3JzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJnZXRPbmUiLCJOZXh0SGVhZCIsIm1hcmtlZCIsIkFydGljbGUiLCJkYXRhIiwicHJvcHMiLCJhbmNob3JzIiwidGl0bGUiLCJfX2h0bWwiLCJib2R5IiwicmVxIiwicXVlcnkiLCJwYXJhbXMiLCJfaWQiLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFjOztBQUN2QixBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7QUFDUDs7SUFDTSxBOzs7Ozs7Ozs7Ozs2QkFTSztVQUFBLEFBQ0MsT0FBUyxLQURWLEFBQ2UsTUFEZixBQUNDLEFBQ1I7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsaURBQ1EsS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEIsOENBQTVCOztvQkFBQTtzQkFGSixBQUNFLEFBQ0UsQUFFRjtBQUZFOzJCQUVGLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxtQ0FBUSxNQUFNLEtBQWYsQUFBb0I7b0JBQXBCO3NCQUxKLEFBSUUsQUFDRSxBQUVGO0FBRkU7MkJBRUYsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxjQURGLEFBQ0UsQUFBVSxBQUNWO21CQUFBOztvQkFBQTtzQkFGRixBQUVFLEFBQ0E7QUFEQTtBQUFBO2lDQUcyQixFQUFFLFFBQVEsc0JBQU8sS0FGNUMsQUFFMkIsQUFBVSxBQUFZOzRDQUZqRCxBQUNZOztvQkFEWjtzQkFWSixBQU9FLEFBR0U7QUFBQTtBQUVFO2lCQVpOO2FBREYsQUFDRSxBQTBCSDtBQTFCRzs7Ozs7O1ksQUFYMkIsV0FBQSxBO1ksQUFBSyxhLEFBQUE7Ozs7Ozs7O3dCQUNsQixNQUFNLElBQU4sQUFBVSxTQUFTLEEsT0FBM0IsQSxZQUFBLEE7O3FCLEFBQ0o7Ozs7Ozt1QkFDYyxtQkFBTyxFQUFFLEtBQVQsQSxBQUFPOzttQkFBbkI7QTtpREFDRyxFQUFFLE1BQU0sSUFBQSxBQUFJLEtBQVosQUFBaUIsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUxSLEEsQUF5Q3RCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImFydGljbGUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRTovYmxvZy1uZXh0In0=