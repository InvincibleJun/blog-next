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

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _style = require("styled-jsx\\style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _colors = require("material-ui/styles/colors");

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _css = require("styled-jsx/css");

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "E:\\blog-next\\pages\\blog.js?entry";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  background-color: ", ";\n  height: 80px;\n"], ["\n  background-color: ", ";\n  height: 80px;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)([""], [""]);

// const scoped = resolveScopedStyles(
//   <scope>
//     <style jsx>{".link { color: green }"}</style>
//   </scope>
// );

var Header = _styledComponents2.default.div(_templateObject, _colors.blue500);
var Container = _styledComponents2.default.div(_templateObject2);

var List = _styledComponents2.default.div(_templateObject2);

var User = _styledComponents2.default.div(_templateObject2);

var Blog = function (_Component) {
  (0, _inherits3.default)(Blog, _Component);

  function Blog() {
    (0, _classCallCheck3.default)(this, Blog);

    return (0, _possibleConstructorReturn3.default)(this, (Blog.__proto__ || (0, _getPrototypeOf2.default)(Blog)).apply(this, arguments));
  }

  (0, _createClass3.default)(Blog, [{
    key: "render",

    // constructor(props) {
    //   super(props)
    // }
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement("div", {
        className: "jsx-609213807" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "header"), _react2.default.createElement("div", {
        className: "jsx-609213807" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement("info", {
        className: "jsx-609213807",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement("div", {
        className: "jsx-609213807" + " " + "chunk-border user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), _react2.default.createElement("div", {
        className: "jsx-609213807" + " " + "chunk-border user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      })), _react2.default.createElement("div", {
        className: "jsx-609213807" + " " + "chunk-border list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: "609213807",
        css: ".header.jsx-609213807{background-color:" + _colors.blue500 + ";height:80px;}.container.jsx-609213807{width:1080px;margin:20px auto;background-color:" + _colors.green50 + ";position:relative;overflow:auto;}.info.jsx-609213807{width:260px;float:right;right:0;top:0;height:800px;background-color:" + _colors.amber500 + ";}.user.jsx-609213807{height:300px;background-color:" + _colors.blueGrey500 + ";margin-bottom:20px;}.list.jsx-609213807{width:800px;height:400px;background-color:" + _colors.amber500 + ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDb0IsQUFHMkQsQUFJakMsQUFPRCxBQVFDLEFBS0QsWUFaQSxBQWFDLENBcEJJLEFBZTZCLFdBUHRDLENBYXNDLEtBcEJBLEVBUXhDLE1BQ08sUUFkRCxLQWVrQyxPQWRoRCxDQW1CcUIsWUFNckIsS0FwQm9CLEVBZXBCLGdCQWRnQixHQVNoQixXQVJBIiwiZmlsZSI6InBhZ2VzXFxibG9nLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkU6L2Jsb2ctbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtcclxuICBibHVlNTAwLFxyXG4gIGdyZWVuNTAsXHJcbiAgYW1iZXI1MDAsXHJcbiAgYmx1ZUdyZXk1MDBcclxufSBmcm9tIFwibWF0ZXJpYWwtdWkvc3R5bGVzL2NvbG9yc1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xyXG5cclxuLy8gY29uc3Qgc2NvcGVkID0gcmVzb2x2ZVNjb3BlZFN0eWxlcyhcclxuLy8gICA8c2NvcGU+XHJcbi8vICAgICA8c3R5bGUganN4PntcIi5saW5rIHsgY29sb3I6IGdyZWVuIH1cIn08L3N0eWxlPlxyXG4vLyAgIDwvc2NvcGU+XHJcbi8vICk7XHJcblxyXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7Ymx1ZTUwMH07XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG5gO1xyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YGA7XHJcblxyXG5jb25zdCBMaXN0ID0gc3R5bGVkLmRpdmBgO1xyXG5cclxuY29uc3QgVXNlciA9IHN0eWxlZC5kaXZgYDtcclxuXHJcbmNsYXNzIEJsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIC8vIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgLy8gICBzdXBlcihwcm9wcylcclxuICAvLyB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPmhlYWRlcjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aW5mbz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaHVuay1ib3JkZXIgdXNlclwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2h1bmstYm9yZGVyIHVzZXJcIiAvPlxyXG4gICAgICAgICAgPC9pbmZvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaHVuay1ib3JkZXIgbGlzdFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Ymx1ZTUwMH07XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTA4MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtncmVlbjUwfTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pbmZvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogODAwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7YW1iZXI1MDB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnVzZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JsdWVHcmV5NTAwfTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5saXN0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2FtYmVyNTAwfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2c7XHJcbiJdfQ== */\n/*@ sourceURL=pages\\blog.js?entry */"
      }));
    }
  }]);

  return Blog;
}(_react.Component);

exports.default = Blog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwic3R5bGVkIiwiYmx1ZTUwMCIsImdyZWVuNTAiLCJhbWJlcjUwMCIsImJsdWVHcmV5NTAwIiwiTGF5b3V0IiwiY3NzIiwiSGVhZGVyIiwiZGl2IiwiQ29udGFpbmVyIiwiTGlzdCIsIlVzZXIiLCJCbG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUNFLEFBQ0EsQUFDQSxBQUNBOztBQUVGLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7Ozs7Ozs7OztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTSxTQUFTLDJCQUFULEFBQWdCLElBQXRCLEFBQU0sQUFDZ0I7QUFHdEIsSUFBTSxZQUFZLDJCQUFaLEFBQW1CLElBQXpCOztBQUVBLElBQU0sT0FBTywyQkFBUCxBQUFjLElBQXBCOztBQUVBLElBQU0sT0FBTywyQkFBUCxBQUFjLElBQXBCOztJQUVNLEE7Ozs7Ozs7Ozs7U0FDSjs7QUFDQTtBQUNBOzs2QkFDUyxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTsyQ0FBQSxBQUFlOztvQkFBZjtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsMkJBQUEsY0FBQTsyQ0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQTsyQ0FDRSxBQUFlOztvQkFBZjtzQkFERixBQUNFLEFBQ0E7QUFEQTtBQUFBOzJDQUNBLEFBQWU7O29CQUFmO3NCQUhKLEFBQ0UsQUFFRSxBQUVGO0FBRkU7QUFBQTsyQ0FFRixBQUFlOztvQkFBZjtzQkFQSixBQUVFLEFBS0U7QUFBQTtBQUFBO2lCQVBKO2FBQUEsQUFXMEIsOERBWDFCLEFBaUIwQiw2R0FqQjFCLEFBMkIwQixrSkEzQjFCLEFBK0IwQiwrRUEvQjFCLEFBcUMwQiwyR0F0QzVCLEFBQ0UsQUEwQ0g7QUExQ0c7Ozs7O0FBTmEsQSxBQW1EbkI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiYmxvZy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJFOi9ibG9nLW5leHQifQ==