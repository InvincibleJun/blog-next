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

      return _react2.default.createElement(_blog3.default, null, _react2.default.createElement("div", {
        className: "jsx-2215131335"
      }, data.map(function (art) {
        return _react2.default.createElement(_link2.default, {
          as: "/blog/" + art._id,
          href: "/blog/article?_id=" + art._id,
          key: art.title
        }, _react2.default.createElement("a", {
          className: "jsx-2215131335" + " " + "blog-list"
        }, _react2.default.createElement("h3", {
          className: "jsx-2215131335"
        }, art.title), _react2.default.createElement("p", {
          className: "jsx-2215131335" + " " + "article-time"
        }, (0, _format2.default)(art.createTime)), _react2.default.createElement("p", {
          className: "jsx-2215131335" + " " + "article-desc"
        }, art.desc)));
      }), _react2.default.createElement(_style2.default, {
        styleId: "2215131335",
        css: ["a.jsx-2215131335{display:block;}", "h3.jsx-2215131335{color:" + _colors.grey800 + ";}", ".article-desc.jsx-2215131335{font-size:14px;line-height:20px;}", ".article-time.jsx-2215131335{margin:15px 0;font-size:14px;color:" + _colors.grey600 + ";}", ".blog-list.jsx-2215131335{margin-bottom:20px;padding:20px;box-sizing:border-box;border:1px solid " + _colors.lightGreen50 + ";background-color:" + _colors.blueGrey50 + ";border-radius:4px;}"]
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
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

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return List;
}(_react.Component);

exports.default = List;