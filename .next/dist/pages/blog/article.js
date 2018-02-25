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
          lineNumber: 18
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement("link", { rel: "stylesheet", href: "/static/css/github-markdonw.css", className: "jsx-2085888330",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      })), _react2.default.createElement("div", {
        className: "jsx-2085888330" + " " + "markdown-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement("h3", {
        className: "jsx-2085888330",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, data.title), _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: data.body }, className: "jsx-2085888330",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: "2085888330",
        css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nXFxhcnRpY2xlLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCb0IiLCJmaWxlIjoicGFnZXNcXGJsb2dcXGFydGljbGUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRTovYmxvZy1uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsb2cgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYmxvZ1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldE9uZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9ibG9nXCI7XHJcbmltcG9ydCBOZXh0SGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbi8vIGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9jc3MvZ2l0aHViLW1hcmtkb253LmNzc1wiO1xyXG5jbGFzcyBBcnRpY2xlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxLCBxdWVyeSB9KSB7XHJcbiAgICBjb25zdCB7IF9pZCB9ID0gcmVxID8gcmVxLnBhcmFtcyA6IHF1ZXJ5O1xyXG4gICAgaWYgKF9pZCkge1xyXG4gICAgICBsZXQgcmVzID0gYXdhaXQgZ2V0T25lKHsgX2lkIH0pO1xyXG4gICAgICByZXR1cm4geyBkYXRhOiByZXMuZGF0YS5kYXRhIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QmxvZz5cclxuICAgICAgICA8TmV4dEhlYWQ+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvY3NzL2dpdGh1Yi1tYXJrZG9udy5jc3NcIiAvPlxyXG4gICAgICAgIDwvTmV4dEhlYWQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJrZG93bi1ib2R5XCI+XHJcbiAgICAgICAgICA8aDM+e2RhdGEudGl0bGV9PC9oMz5cclxuICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkYXRhLmJvZHkgfX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgYH08L3N0eWxlPlxyXG4gICAgICA8L0Jsb2c+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZTtcclxuIl19 */\n/*@ sourceURL=pages\\blog\\article.js?entry */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nXFxhcnRpY2xlLmpzIl0sIm5hbWVzIjpbIkJsb2ciLCJSZWFjdCIsIkNvbXBvbmVudCIsImdldE9uZSIsIk5leHRIZWFkIiwiQXJ0aWNsZSIsImRhdGEiLCJwcm9wcyIsInRpdGxlIiwiX19odG1sIiwiYm9keSIsInJlcSIsInF1ZXJ5IiwicGFyYW1zIiwiX2lkIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFjOztBQUN2QixBQUFPOzs7Ozs7OztBQUNQOztJLEFBQ007Ozs7Ozs7Ozs7OzZCQVNLO1VBQUEsQUFDQyxPQUFTLEtBRFYsQUFDZSxNQURmLEFBQ0MsQUFDUjs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxpREFDUSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0Qiw4Q0FBNUI7O29CQUFBO3NCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7MkJBRUYsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxjQURGLEFBQ0UsQUFBVSxBQUNWLCtDQUFLLHlCQUF5QixFQUFFLFFBQVEsS0FBeEMsQUFBOEIsQUFBZSxtQkFBN0M7O29CQUFBO3NCQU5KLEFBSUUsQUFFRTtBQUFBOztpQkFOSjthQURGLEFBQ0UsQUFXSDtBQVhHOzs7Ozs7WSxBQVgyQixXLEFBQUE7WSxBQUFLLGFBQUEsQTs7Ozs7Ozs7d0JBQ2xCLE1BQU0sSUFBTixBQUFVLFNBQVMsQSxPQUEzQixBLFksQUFBQTs7cUIsQUFDSjs7Ozs7O3VCQUNjLG1CQUFPLEVBQUUsS0FBVCxBLEFBQU87O21CQUFuQjtBO2lEQUNHLEVBQUUsTUFBTSxJQUFBLEFBQUksS0FBWixBLEFBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTFIsQSxBQTBCdEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiYXJ0aWNsZS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJFOi9ibG9nLW5leHQifQ==