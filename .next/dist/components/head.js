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

var _head = require("next\\dist\\lib\\head.js");

var _head2 = _interopRequireDefault(_head);

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "E:\\blog\\blog-next\\components\\head.js";


var Head = function (_Component) {
  (0, _inherits3.default)(Head, _Component);

  function Head() {
    (0, _classCallCheck3.default)(this, Head);

    return (0, _possibleConstructorReturn3.default)(this, (Head.__proto__ || (0, _getPrototypeOf2.default)(Head)).apply(this, arguments));
  }

  (0, _createClass3.default)(Head, [{
    key: "render",
    value: function render() {
      var title = this.props.title;

      return _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react2.default.createElement("meta", { charSet: "UTF-8", __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }), _react2.default.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, title || ""), _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1", __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), _react2.default.createElement("link", { rel: "stylesheet", href: "/static/css/reset.css", __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), _react2.default.createElement("link", { rel: "stylesheet", href: "/static/css/index.css", __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }));
    }
  }]);

  return Head;
}(_react.Component);

Head.propTypes = {
  title: _propTypes.string
};

exports.default = Head;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGhlYWQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJOZXh0SGVhZCIsInN0cmluZyIsIkhlYWQiLCJ0aXRsZSIsInByb3BzIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBUzs7Ozs7OztJQUVILEE7Ozs7Ozs7Ozs7OzZCQUNLO1VBQUEsQUFDQyxRQUFVLEtBRFgsQUFDZ0IsTUFEaEIsQUFDQyxBQUNSOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLDBDQUNRLFNBQU4sQUFBYztvQkFBZDtzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxjQUFBOztvQkFBQTtzQkFBQSxBQUFRO0FBQVI7QUFBQSxrQkFGRixBQUVFLEFBQWlCLEFBQ2pCLDZDQUFNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCO29CQUE5QjtzQkFIRixBQUdFLEFBQ0E7QUFEQTtrREFDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtvQkFBNUI7c0JBSkYsQUFJRSxBQUNBO0FBREE7a0RBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7b0JBQTVCO3NCQU5KLEFBQ0UsQUFLRSxBQUdMO0FBSEs7Ozs7OztBLEFBVFc7O0FBZW5CLEtBQUEsQUFBSztBQUFMLEFBQWlCLEFBQ1IsQUFHVDtBQUppQixBQUNmOztrQkFHRixBQUFlIiwiZmlsZSI6ImhlYWQuanMiLCJzb3VyY2VSb290IjoiRTovYmxvZy9ibG9nLW5leHQifQ==