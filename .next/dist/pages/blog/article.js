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
        css: ".article-main.jsx-1180239077{width:800px;}.article-right.jsx-1180239077{width:260px;float:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nXFxhcnRpY2xlLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDb0IsQUFHeUIsQUFHQSxZQUZkLEFBR2MsWUFDZCIsImZpbGUiOiJwYWdlc1xcYmxvZ1xcYXJ0aWNsZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJFOi9ibG9nL2Jsb2ctbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCbG9nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Jsb2dcIjtcclxuaW1wb3J0IEFuY2hvcnMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmxvZy9hbmNob3JzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0T25lIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Jsb2dcIjtcclxuaW1wb3J0IE5leHRIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IG1hcmtlZCBmcm9tIFwibWFya2VkXCI7XHJcbi8vIGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9jc3MvZ2l0aHViLW1hcmtkb253LmNzc1wiO1xyXG5jbGFzcyBBcnRpY2xlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLCBxdWVyeSB9KSB7XHJcbiAgICBjb25zdCB7IF9pZCB9ID0gcmVxID8gcmVxLnBhcmFtcyA6IHF1ZXJ5O1xyXG4gICAgaWYgKF9pZCkge1xyXG4gICAgICBsZXQgcmVzID0gYXdhaXQgZ2V0T25lKHsgX2lkIH0pO1xyXG4gICAgICByZXR1cm4geyBkYXRhOiByZXMuZGF0YS5kYXRhIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QmxvZz5cclxuICAgICAgICA8TmV4dEhlYWQ+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvY3NzL2dpdGh1Yi1tYXJrZG9udy5jc3NcIiAvPlxyXG4gICAgICAgIDwvTmV4dEhlYWQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLXJpZ2h0XCI+XHJcbiAgICAgICAgICA8QW5jaG9ycyBkYXRhPXtkYXRhLmFuY2hvcnN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaHVuay1ib3JkZXIgYXJ0aWNsZS1tYWluXCI+XHJcbiAgICAgICAgICA8aDM+e2RhdGEudGl0bGV9PC9oMz5cclxuICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYXJrZG93bi1ib2R5XCJcclxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBtYXJrZWQoZGF0YS5ib2R5KSB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuYXJ0aWNsZS1tYWluIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFydGljbGUtcmlnaHQge1xyXG4gICAgICAgICAgICB3aWR0aDogMjYwcHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvQmxvZz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlO1xyXG4iXX0= */\n/*@ sourceURL=pages\\blog\\article.js?entry */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nXFxhcnRpY2xlLmpzIl0sIm5hbWVzIjpbIkJsb2ciLCJBbmNob3JzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJnZXRPbmUiLCJOZXh0SGVhZCIsIm1hcmtlZCIsIkFydGljbGUiLCJkYXRhIiwicHJvcHMiLCJhbmNob3JzIiwidGl0bGUiLCJfX2h0bWwiLCJib2R5IiwicmVxIiwicXVlcnkiLCJwYXJhbXMiLCJfaWQiLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFjOztBQUN2QixBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7QUFDUDs7SUFDTSxBOzs7Ozs7Ozs7Ozs2QkFTSztVQUFBLEFBQ0MsT0FBUyxLQURWLEFBQ2UsTUFEZixBQUNDLEFBQ1I7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsaURBQ1EsS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEIsOENBQTVCOztvQkFBQTtzQkFGSixBQUNFLEFBQ0UsQUFFRjtBQUZFOzJCQUVGLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyxtQ0FBUSxNQUFNLEtBQWYsQUFBb0I7b0JBQXBCO3NCQUxKLEFBSUUsQUFDRSxBQUVGO0FBRkU7MkJBRUYsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxjQURGLEFBQ0UsQUFBVSxBQUNWO21CQUFBOztvQkFBQTtzQkFGRixBQUVFLEFBQ0E7QUFEQTtBQUFBO2lDQUcyQixFQUFFLFFBQVEsc0JBQU8sS0FGNUMsQUFFMkIsQUFBVSxBQUFZOzRDQUZqRCxBQUNZOztvQkFEWjtzQkFWSixBQU9FLEFBR0U7QUFBQTtBQUVFO2lCQVpOO2FBREYsQUFDRSxBQTBCSDtBQTFCRzs7Ozs7O1ksQUFYMkIsV0FBQSxBO1ksQUFBSyxhLEFBQUE7Ozs7Ozs7O3dCQUNsQixNQUFNLElBQU4sQUFBVSxTQUFTLEEsT0FBM0IsQSxZQUFBLEE7O3FCLEFBQ0o7Ozs7Ozt1QkFDYyxtQkFBTyxFQUFFLEtBQVQsQSxBQUFPOzttQkFBbkI7QTtpREFDRyxFQUFFLE1BQU0sSUFBQSxBQUFJLEtBQVosQUFBaUIsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUxSLEEsQUF5Q3RCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImFydGljbGUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRTovYmxvZy9ibG9nLW5leHQifQ==