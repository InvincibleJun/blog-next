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

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      return _react2.default.createElement(_blog2.default, null, _react2.default.createElement("div", {
        className: "jsx-2378637579" + " " + "article-right"
      }, _react2.default.createElement(_anchors2.default, { data: data.anchors })), _react2.default.createElement("div", {
        className: "jsx-2378637579" + " " + "chunk-border article-main"
      }, _react2.default.createElement("h3", {
        className: "jsx-2378637579"
      }, data.title), _react2.default.createElement("p", {
        className: "jsx-2378637579" + " " + "article-time"
      }, (0, _moment2.default)(data.createTime).format('YYYY-MM-DD hh:mm:ss')), _react2.default.createElement("hr", {
        className: "jsx-2378637579"
      }), _react2.default.createElement("div", {
        dangerouslySetInnerHTML: { __html: data.body },
        className: "jsx-2378637579" + " " + "markdown-body"
      }), _react2.default.createElement("div", { style: { height: 500 }, className: "jsx-2378637579"
      })), _react2.default.createElement(_style2.default, {
        styleId: "2378637579",
        css: [".article-main.jsx-2378637579{width:800px;}", ".article-right.jsx-2378637579{width:260px;float:right;}", ".article-time.jsx-2378637579{font-size:14px;margin:10px 20px;}"]
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
                  _context.next = 8;
                  break;
                }

                _context.next = 4;
                return (0, _blog3.getOne)({ _id: _id });

              case 4:
                res = _context.sent;
                data = res.data.data;

                data.body = (0, _marked2.default)(data.body);
                return _context.abrupt("return", { data: data });

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