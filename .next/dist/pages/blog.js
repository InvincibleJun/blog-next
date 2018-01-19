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

var _style = require("styled-jsx\\style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _list = require("../components/blog/list");

var _list2 = _interopRequireDefault(_list);

var _colors = require("material-ui/styles/colors");

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _css = require("styled-jsx/css");

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "E:\\blog-next\\pages\\blog.js?entry";


var Blog = function (_Component) {
  (0, _inherits3.default)(Blog, _Component);

  function Blog() {
    (0, _classCallCheck3.default)(this, Blog);

    return (0, _possibleConstructorReturn3.default)(this, (Blog.__proto__ || (0, _getPrototypeOf2.default)(Blog)).apply(this, arguments));
  }

  (0, _createClass3.default)(Blog, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement("div", {
        className: "jsx-1072645673" + " " + "blog-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, "header", this.props.userAgent), _react2.default.createElement("div", {
        className: "jsx-1072645673" + " " + "blog-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement("div", {
        className: "jsx-1072645673" + " " + "blog-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement("div", {
        className: "jsx-1072645673" + " " + "chunk-border blog-user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement("div", {
        className: "jsx-1072645673" + " " + "chunk-border blog-user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      })), _react2.default.createElement("div", {
        className: "jsx-1072645673" + " " + "chunk-border blog-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement(_list2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }))), _react2.default.createElement(_style2.default, {
        styleId: "1072645673",
        css: ".blog-header.jsx-1072645673{background-color:" + _colors.blue500 + ";height:80px;}.blog-container.jsx-1072645673{width:1080px;margin:20px auto;background-color:" + _colors.green50 + ";position:relative;overflow:auto;}.blog-info.jsx-1072645673{width:260px;float:right;right:0;top:0;height:800px;background-color:" + _colors.amber500 + ";}.blog-user.jsx-1072645673{height:300px;background-color:" + _colors.blueGrey500 + ";margin-bottom:20px;}.blog-list.jsx-1072645673{width:800px;height:400px;background-color:" + _colors.amber500 + ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCb0IsQUFHMkQsQUFJakMsQUFPRCxBQVFDLEFBS0QsWUFaQSxBQWFDLENBcEJJLEFBZTZCLFdBUHRDLENBYXNDLEtBcEJBLEVBUXhDLE1BQ08sUUFkRCxLQWVrQyxPQWRoRCxDQW1CcUIsWUFNckIsS0FwQm9CLEVBZXBCLGdCQWRnQixHQVNoQixXQVJBIiwiZmlsZSI6InBhZ2VzXFxibG9nLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkU6L2Jsb2ctbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvYmxvZy9saXN0XCI7XHJcbmltcG9ydCB7XHJcbiAgYmx1ZTUwMCxcclxuICBncmVlbjUwLFxyXG4gIGFtYmVyNTAwLFxyXG4gIGJsdWVHcmV5NTAwXHJcbn0gZnJvbSBcIm1hdGVyaWFsLXVpL3N0eWxlcy9jb2xvcnNcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcclxuXHJcbmNsYXNzIEJsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoeyByZXEgfSkge1xyXG4gICAgY29uc3QgdXNlckFnZW50ID0gcmVxID8gcmVxLmhlYWRlcnNbXCJ1c2VyLWFnZW50XCJdIDogbmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuICAgIHJldHVybiB7IHVzZXJBZ2VudCB9O1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1oZWFkZXJcIj5oZWFkZXJ7dGhpcy5wcm9wcy51c2VyQWdlbnR9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWluZm9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaHVuay1ib3JkZXIgYmxvZy11c2VyXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaHVuay1ib3JkZXIgYmxvZy11c2VyXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaHVuay1ib3JkZXIgYmxvZy1saXN0XCI+XHJcbiAgICAgICAgICAgIDxMaXN0IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuYmxvZy1oZWFkZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JsdWU1MDB9O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmxvZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTA4MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtncmVlbjUwfTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ibG9nLWluZm8ge1xyXG4gICAgICAgICAgICB3aWR0aDogMjYwcHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHthbWJlcjUwMH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmxvZy11c2VyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtibHVlR3JleTUwMH07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmxvZy1saXN0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2FtYmVyNTAwfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2c7XHJcbiJdfQ== */\n/*@ sourceURL=pages\\blog.js?entry */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var req = _ref.req;

      var userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
      return { userAgent: userAgent };
    }
  }]);

  return Blog;
}(_react.Component);

exports.default = Blog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxibG9nLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwic3R5bGVkIiwiTGlzdCIsImJsdWU1MDAiLCJncmVlbjUwIiwiYW1iZXI1MDAiLCJibHVlR3JleTUwMCIsIkxheW91dCIsImNzcyIsIkJsb2ciLCJwcm9wcyIsInVzZXJBZ2VudCIsInJlcSIsImhlYWRlcnMiLCJuYXZpZ2F0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQ0UsQUFDQSxBQUNBLEFBQ0E7O0FBRUYsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7Ozs7OztJLEFBRUQ7Ozs7Ozs7Ozs7OzZCQUtLLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBO0FBQUE7QUFBQSxTQUFvQyxlQUFBLEFBQUssTUFEM0MsQUFDRSxBQUErQyxBQUMvQyw0QkFBQSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUE7NENBQ0UsQUFBZTs7b0JBQWY7c0JBREYsQUFDRSxBQUNBO0FBREE7QUFBQTs0Q0FDQSxBQUFlOztvQkFBZjtzQkFISixBQUNFLEFBRUUsQUFFRjtBQUZFO0FBQUEsMkJBRUYsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDOztvQkFBRDtzQkFSTixBQUVFLEFBS0UsQUFDRTtBQUFBO0FBQUE7aUJBUk47YUFBQSxBQWEwQixvRUFiMUIsQUFtQjBCLG1IQW5CMUIsQUE2QjBCLHdKQTdCMUIsQUFpQzBCLHFGQWpDMUIsQUF1QzBCLGlIQXhDNUIsQUFDRSxBQTRDSDtBQTVDRzs7OzswQ0FONEI7VUFBUCxBQUFPLFdBQVAsQUFBTyxBQUM5Qjs7VUFBTSxZQUFZLE1BQU0sSUFBQSxBQUFJLFFBQVYsQUFBTSxBQUFZLGdCQUFnQixVQUFwRCxBQUE4RCxBQUM5RDthQUFPLEVBQUUsV0FBVCxBQUFPLEFBQ1I7Ozs7O0FBSmdCLEEsQUFzRG5COztrQkFBQSxBQUFlIiwiZmlsZSI6ImJsb2cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRTovYmxvZy1uZXh0In0=