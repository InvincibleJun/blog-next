"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "E:\\blog-next\\components\\blog\\list.js";


var List = function (_Component) {
  (0, _inherits3.default)(List, _Component);

  function List() {
    (0, _classCallCheck3.default)(this, List);

    return (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).apply(this, arguments));
  }

  (0, _createClass3.default)(List, [{
    key: "render",
    value: function render() {
      var userAgent = this.props.userAgent;

      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, this.props.userAgent);
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var req = _ref.req;

      var userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
      return { userAgent: 1 };
    }
  }]);

  return List;
}(_react.Component);

exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGJsb2dcXGxpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMaXN0IiwidXNlckFnZW50IiwicHJvcHMiLCJyZXEiLCJoZWFkZXJzIiwibmF2aWdhdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7Ozs7Ozs7O0lBRVYsQTs7Ozs7Ozs7Ozs7NkJBTUs7VUFBQSxBQUNDLFlBQWMsS0FEZixBQUNvQixNQURwQixBQUNDLEFBQ1I7OzZCQUFPLGNBQUE7O29CQUFBO3NCQUFBLEFBQU07QUFBTjtBQUFBLE9BQUEsT0FBTSxBQUFLLE1BQWxCLEFBQU8sQUFBaUIsQUFDekI7Ozs7MENBUitCO1VBQVAsQUFBTyxXQUFQLEFBQU8sQUFDOUI7O1VBQU0sWUFBWSxNQUFNLElBQUEsQUFBSSxRQUFWLEFBQU0sQUFBWSxnQkFBZ0IsVUFBcEQsQUFBOEQsQUFDOUQ7YUFBTyxFQUFFLFdBQVQsQUFBTyxBQUFhLEFBQ3JCOzs7OztBQUpnQixBLEFBWW5COztrQkFBQSxBQUFlIiwiZmlsZSI6Imxpc3QuanMiLCJzb3VyY2VSb290IjoiRTovYmxvZy1uZXh0In0=