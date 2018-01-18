'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\blog\\blog-front-user\\components\\Head.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  line-height: 40px;\n  background: white;\n  overflow: hidden;\n'], ['\n  line-height: 40px;\n  background: white;\n  overflow: hidden;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  float: left;\n  color: white;\n  text-align: center;\n  font-size: 14px;\n  width: 120px;\n  background-color: black;  \n'], ['\n  float: left;\n  color: white;\n  text-align: center;\n  font-size: 14px;\n  width: 120px;\n  background-color: black;  \n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  marigin-left:120px;\n  padding-right: 200px;\n  &>a {\n    float: right;\n    width: 100px;\n    margin: 0 10px;\n    font-size: 14px;\n  }\n'], ['\n  marigin-left:120px;\n  padding-right: 200px;\n  &>a {\n    float: right;\n    width: 100px;\n    margin: 0 10px;\n    font-size: 14px;\n  }\n']);

var Container = _styledComponents2.default.div(_templateObject);
var Logo = _styledComponents2.default.div(_templateObject2);

var MenuList = _styledComponents2.default.div(_templateObject3);

var Menu = function (_Component) {
  (0, _inherits3.default)(Menu, _Component);

  function Menu() {
    (0, _classCallCheck3.default)(this, Menu);

    return (0, _possibleConstructorReturn3.default)(this, (Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).apply(this, arguments));
  }

  (0, _createClass3.default)(Menu, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(Logo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, 'Jarvan\'s Blog'), _react2.default.createElement(MenuList, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, 'Home')), _react2.default.createElement(_link2.default, { href: '/blog', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, 'Blog'))));
    }
  }]);

  return Menu;
}(_react.Component);

exports.default = Menu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJzdHlsZWQiLCJMaW5rIiwiQ29udGFpbmVyIiwiZGl2IiwiTG9nbyIsIk1lbnVMaXN0IiwiTWVudSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7Ozs7QUFFUCxJQUFNLFlBQVksMkJBQVosQUFBbUIsSUFBekI7QUFLQSxJQUFNLE9BQU8sMkJBQVAsQUFBYyxJQUFwQjs7QUFTQSxJQUFNLFdBQVcsMkJBQVgsQUFBa0IsSUFBeEI7O0lBV00sQTs7Ozs7Ozs7Ozs7NkJBQ0ssQUFDUDs2QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNHLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxtQ0FBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLGdDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBQSxBQUFlO0FBQWY7eUJBQWUsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRGpCLEFBQ0UsQUFBZSxBQUNmLDBCQUFBLEFBQUMsZ0NBQUssTUFBTixBQUFXO29CQUFYO3NCQUFBLEFBQW1CO0FBQW5CO3lCQUFtQixjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FMekIsQUFDRSxBQUVFLEFBRUUsQUFBbUIsQUFNMUI7Ozs7O0FBYmdCLEEsQUFnQm5COztrQkFBQSxBQUFlIiwiZmlsZSI6IkhlYWQuanMiLCJzb3VyY2VSb290IjoiRTovYmxvZy9ibG9nLWZyb250LXVzZXIifQ==