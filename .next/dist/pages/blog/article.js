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

      console.log(data);
      return _react2.default.createElement(_blog2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement("div", {
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
        dangerouslySetInnerHTML: { __html: data.body },
        className: "jsx-1180239077" + " " + "markdown-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement("div", { style: { height: 500 }, className: "jsx-1180239077",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: "1180239077",
        css: ".article-main.jsx-1180239077{width:800px;}.article-right.jsx-1180239077{width:260px;float:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nXFxhcnRpY2xlLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Db0IsQUFHeUIsQUFHQSxZQUZkLEFBR2MsWUFDZCIsImZpbGUiOiJwYWdlc1xcYmxvZ1xcYXJ0aWNsZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJFOi9ibG9nL2Jsb2ctbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCbG9nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Jsb2dcIjtcclxuaW1wb3J0IEFuY2hvcnMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmxvZy9hbmNob3JzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0T25lIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Jsb2dcIjtcclxuaW1wb3J0IE5leHRIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IG1hcmtlZCBmcm9tIFwibWFya2VkXCI7XHJcbi8vIGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9jc3MvZ2l0aHViLW1hcmtkb253LmNzc1wiO1xyXG5jbGFzcyBBcnRpY2xlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLCBxdWVyeSB9KSB7XHJcbiAgICBjb25zdCB7IF9pZCB9ID0gcmVxID8gcmVxLnBhcmFtcyA6IHF1ZXJ5O1xyXG4gICAgaWYgKF9pZCkge1xyXG4gICAgICBsZXQgcmVzID0gYXdhaXQgZ2V0T25lKHsgX2lkIH0pO1xyXG4gICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuICAgICAgZGF0YS5ib2R5ID0gbWFya2VkKGRhdGEuYm9keSlcclxuICAgICAgcmV0dXJuIHsgZGF0YSB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgIH1cclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxCbG9nPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1yaWdodFwiPlxyXG4gICAgICAgICAgPEFuY2hvcnMgZGF0YT17ZGF0YS5hbmNob3JzfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2h1bmstYm9yZGVyIGFydGljbGUtbWFpblwiPlxyXG4gICAgICAgICAgPGgzPntkYXRhLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFya2Rvd24tYm9keVwiXHJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGF0YS5ib2R5IH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDUwMCB9fT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5hcnRpY2xlLW1haW4ge1xyXG4gICAgICAgICAgICB3aWR0aDogODAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYXJ0aWNsZS1yaWdodCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNjBweDtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9CbG9nID5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlO1xyXG4iXX0= */\n/*@ sourceURL=pages\\blog\\article.js?entry */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req,
            query = _ref.query;

        var _ref3, _id, res, data;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ref3 = req ? req.params : query, _id = _ref3._id;

                if (!_id) {
                  _context.next = 10;
                  break;
                }

                _context.next = 4;
                return (0, _blog3.getOne)({ _id: _id });

              case 4:
                res = _context.sent;
                data = res.data.data;

                data.body = (0, _marked2.default)(data.body);
                return _context.abrupt("return", { data: data });

              case 10:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nXFxhcnRpY2xlLmpzIl0sIm5hbWVzIjpbIkJsb2ciLCJBbmNob3JzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJnZXRPbmUiLCJOZXh0SGVhZCIsIm1hcmtlZCIsIkFydGljbGUiLCJkYXRhIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiYW5jaG9ycyIsInRpdGxlIiwiX19odG1sIiwiYm9keSIsImhlaWdodCIsInJlcSIsInF1ZXJ5IiwicGFyYW1zIiwiX2lkIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBYzs7QUFDdkIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7O0FBQ1A7O0ksQUFDTTs7Ozs7Ozs7Ozs7NkJBV0s7VUFBQSxBQUNDLE9BQVMsS0FEVixBQUNlLE1BRGYsQUFDQyxBQUNSOztjQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsbUNBQVEsTUFBTSxLQUFmLEFBQW9CO29CQUFwQjtzQkFGSixBQUNFLEFBQ0UsQUFFRjtBQUZFOzJCQUVGLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFBSztBQUFMO0FBQUEsY0FERixBQUNFLEFBQVUsQUFDVjttQkFBQTs7b0JBQUE7c0JBRkYsQUFFRSxBQUNBO0FBREE7QUFBQTtpQ0FHMkIsRUFBRSxRQUFRLEtBRnJDLEFBRTJCLEFBQWU7NENBRjFDLEFBQ1k7O29CQURaO3NCQUhGLEFBR0UsQUFJQTtBQUpBO0FBRUUsaURBRUcsT0FBTyxFQUFFLFFBQWQsQUFBWSxBQUFVLGtCQUF0Qjs7b0JBQUE7c0JBWEosQUFJRSxBQU9FO0FBQUE7O2lCQVhKO2FBREYsQUFDRSxBQXlCSDtBQXpCRzs7Ozs7O1lBZDJCLEEsVyxBQUFBO1lBQUssQSxhLEFBQUE7Ozs7Ozs7O3dCQUNsQixNQUFNLElBQU4sQUFBVSxTQUFTLEEsT0FBM0IsQSxZQUFBLEE7O3FCLEFBQ0o7Ozs7Ozt1QkFDYyxtQkFBTyxFQUFFLEtBQVQsQUFBTyxBOzttQkFBbkI7QSwrQkFDQTtBLHVCQUFPLElBQUEsQUFBSSxLQUFLLEEsQUFDcEI7O3FCQUFBLEFBQUssT0FBTyxzQkFBTyxLQUFuQixBQUFZLEFBQVk7aURBQ2pCLEVBQUUsTUFBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUFMsQSxBQTJDdEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiYXJ0aWNsZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJFOi9ibG9nL2Jsb2ctbmV4dCJ9