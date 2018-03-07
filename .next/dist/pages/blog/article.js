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

var _blog = require("../../components/blog");

var _blog2 = _interopRequireDefault(_blog);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _blog3 = require("../../services/blog");

var _head = require("next\\dist\\lib\\head.js");

var _head2 = _interopRequireDefault(_head);

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
          lineNumber: 18
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement("link", { rel: "stylesheet", href: "/static/css/github-markdonw.css", __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      })), _react2.default.createElement("div", { className: "markdown-body", __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, data.title), _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: data.body }, __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nXFxhcnRpY2xlLmpzIl0sIm5hbWVzIjpbIkJsb2ciLCJSZWFjdCIsIkNvbXBvbmVudCIsImdldE9uZSIsIk5leHRIZWFkIiwiQXJ0aWNsZSIsImRhdGEiLCJwcm9wcyIsInRpdGxlIiwiX19odG1sIiwiYm9keSIsInJlcSIsInF1ZXJ5IiwicGFyYW1zIiwiX2lkIiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQWM7O0FBQ3ZCLEFBQU87Ozs7Ozs7O0FBQ1A7O0lBQ00sQTs7Ozs7Ozs7Ozs7NkJBU0s7VUFBQSxBQUNDLE9BQVMsS0FEVixBQUNlLE1BRGYsQUFDQyxBQUNSOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLGlEQUNRLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO29CQUE1QjtzQkFGSixBQUNFLEFBQ0UsQUFFRjtBQUZFOzJCQUVGLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQUs7QUFBTDtBQUFBLGNBREYsQUFDRSxBQUFVLEFBQ1YsK0NBQUsseUJBQXlCLEVBQUUsUUFBUSxLQUF4QyxBQUE4QixBQUFlO29CQUE3QztzQkFQTixBQUNFLEFBSUUsQUFFRSxBQUlQO0FBSk87Ozs7Ozs7WSxBQWpCdUIsVyxBQUFBO1lBQUssQSxhLEFBQUE7Ozs7Ozs7O3dCQUNsQixNQUFNLElBQU4sQUFBVSxTLEFBQVMsT0FBM0IsQSxZQUFBLEE7O3FCLEFBQ0o7Ozs7Ozt1QkFDYyxtQkFBTyxFQUFFLEssQUFBVCxBQUFPOzttQkFBbkI7QTtpREFDRyxFQUFFLE1BQU0sSUFBQSxBQUFJLEtBQVosQSxBQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUxSLEEsQUF5QnRCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImFydGljbGUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRTovYmxvZy9ibG9nLW5leHQifQ==