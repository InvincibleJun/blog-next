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

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _colors = require('material-ui/styles/colors');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\blog\\blog-front-user\\pages\\index.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  line-height: 40px;\n  height: 400px;\n  background-image: url(./static/image/bg-big.jpg);\n  overflow: hidden;  \n  opacity: 0.8;\n  box-shadow: 0 4px 5px 0px #ccc;\n'], ['\n  line-height: 40px;\n  height: 400px;\n  background-image: url(./static/image/bg-big.jpg);\n  overflow: hidden;  \n  opacity: 0.8;\n  box-shadow: 0 4px 5px 0px #ccc;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  width: 300px;\n  height: 200px;\n  margin: 200px auto 0;\n  color: white;\n  font-size: 30px;\n  line-height: 60px;\n  text-shadow: 2px 2px 5px #FF0000;\n'], ['\n  width: 300px;\n  height: 200px;\n  margin: 200px auto 0;\n  color: white;\n  font-size: 30px;\n  line-height: 60px;\n  text-shadow: 2px 2px 5px #FF0000;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  width: 30px;\n  height: 30px;\n  font-size: 20px;\n'], ['\n  width: 30px;\n  height: 30px;\n  font-size: 20px;\n']);

var Container = _styledComponents2.default.div(_templateObject);

var Title = _styledComponents2.default.div(_templateObject2);
var Down = _styledComponents2.default.div(_templateObject3);

var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-4266793407' + ' ' + 'container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('p', {
        className: 'jsx-4266793407',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, 'WHY ARE YOU LINE'), _react2.default.createElement('p', {
        className: 'jsx-4266793407',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, 'FOR BETTER LIFE'), _react2.default.createElement(Down, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement('i', {
        className: 'jsx-4266793407' + ' ' + 'iconfont icon-down',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, ' ')))), _react2.default.createElement(_style2.default, {
        styleId: '4266793407',
        css: '.container.jsx-4266793407{line-height:40px;height:400px;background-image:url(./static/image/bg-big.jpg);overflow:hidden;opacity:0.8;box-shadow:0 4px 5px 0px #ccc;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ29CLEFBRzRCLGlCQUNKLGFBQ21DLGdEQUNoQyxnQkFDSixZQUNrQiw4QkFDaEMiLCJmaWxlIjoicGFnZXNcXGluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkU6L2Jsb2cvYmxvZy1mcm9udC11c2VyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBGb250SWNvbiBmcm9tICdtYXRlcmlhbC11aS9Gb250SWNvbic7XHJcbmltcG9ydCB7IGJsdWU1MDAsIHJlZDUwMCwgZ3JlZW5BMjAwIH0gZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL2NvbG9ycyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vc3RhdGljL2ltYWdlL2JnLWJpZy5qcGcpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47ICBcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggNXB4IDBweCAjY2NjO1xyXG5gXHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgbWFyZ2luOiAyMDBweCBhdXRvIDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBsaW5lLWhlaWdodDogNjBweDtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA1cHggI0ZGMDAwMDtcclxuYFxyXG5jb25zdCBEb3duID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG5gXHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPFRpdGxlPlxyXG4gICAgICAgICAgICA8cD5XSFkgQVJFIFlPVSBMSU5FPC9wPlxyXG4gICAgICAgICAgICA8cD5GT1IgQkVUVEVSIExJRkU8L3A+XHJcbiAgICAgICAgICAgIDxEb3duPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb25mb250IGljb24tZG93blwiPiA8L2k+XHJcbiAgICAgICAgICAgIDwvRG93bj5cclxuICAgICAgICAgIDwvVGl0bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vc3RhdGljL2ltYWdlL2JnLWJpZy5qcGcpO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgIFxyXG4gICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggNXB4IDBweCAjY2NjO1xyXG4gICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdfQ== */\n/*@ sourceURL=pages\\index.js?entry */'
      }));
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInN0eWxlZCIsIkZvbnRJY29uIiwiYmx1ZTUwMCIsInJlZDUwMCIsImdyZWVuQTIwMCIsIkxheW91dCIsIkNvbnRhaW5lciIsImRpdiIsIlRpdGxlIiwiRG93biIsIkluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFTLEFBQVE7O0FBQzFCLEFBQU8sQUFBWTs7Ozs7Ozs7Ozs7O0FBRW5CLElBQU0sWUFBWSwyQkFBWixBQUFtQixJQUF6Qjs7QUFTQSxJQUFNLFFBQVEsMkJBQVIsQUFBZSxJQUFyQjtBQVNBLElBQU0sT0FBTywyQkFBUCxBQUFjLElBQXBCOztJLEFBTU07Ozs7Ozs7Ozs7OzZCQUNLLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxxQ0FBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGRixBQUVFLEFBQ0Esb0NBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFhOztvQkFBYjtzQkFBQTtBQUFBO0FBQUEsU0FOUixBQUNFLEFBQ0UsQUFHRSxBQUNFO2lCQU5SO2FBREYsQUFDRSxBQXVCSDtBQXZCRzs7Ozs7QUFIYyxBLEFBNkJwQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJFOi9ibG9nL2Jsb2ctZnJvbnQtdXNlciJ9