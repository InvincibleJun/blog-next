webpackHotUpdate(5,{

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "E:\\blog\\blog-next\\components\\blog\\list.js";


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

      return data.map(function (art) {
        return _react2.default.createElement("div", { key: art.title, __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        }, _react2.default.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        }, art.title), _react2.default.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }, art.desc));
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGJsb2dcXGxpc3QuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMaXN0IiwiZGF0YSIsInByb3BzIiwibWFwIiwiYXJ0IiwidGl0bGUiLCJkZXNjIiwicmVxIiwidXNlckFnZW50IiwiaGVhZGVycyIsIm5hdmlnYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7Ozs7OztJQUVWLEE7Ozs7Ozs7Ozs7OzZCQU1LO1VBQUEsQUFDQyxPQUFTLEtBRFYsQUFDZSxNQURmLEFBQ0MsQUFDUjs7a0JBQU8sQUFBSyxJQUFJLGVBQUE7K0JBQ2QsY0FBQSxTQUFLLEtBQUssSUFBVixBQUFjO3NCQUFkO3dCQUFBLEFBQ0U7QUFERjtTQUFBLGtCQUNFLGNBQUE7O3NCQUFBO3dCQUFBLEFBQUs7QUFBTDtBQUFBLGVBREYsQUFDRSxBQUFTLEFBQ1Qsd0JBQUEsY0FBQTs7c0JBQUE7d0JBQUEsQUFBSTtBQUFKO0FBQUEsZUFIWSxBQUNkLEFBRUUsQUFBUTtBQUhaLEFBQU8sQUFPUixPQVBROzs7OzBDQVB1QjtVQUFQLEFBQU8sV0FBUCxBQUFPLEFBQzlCOztVQUFNLFlBQVksTUFBTSxJQUFBLEFBQUksUUFBVixBQUFNLEFBQVksZ0JBQWdCLFVBQXBELEFBQThELEFBQzlEO2FBQU8sRUFBRSxXQUFULEFBQU8sQUFBYSxBQUNyQjs7Ozs7QUFKZ0IsQSxBQWtCbkI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiJFOi9ibG9nL2Jsb2ctbmV4dCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "E:\\blog\\blog-next\\components\\blog\\list.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\blog\\blog-next\\components\\blog\\list.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS45MWNmZWYwODUxYjk1ODRlNzVlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ibG9nL2xpc3QuanM/NzRiYmE3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jbGFzcyBMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxIH0pIHtcclxuICAgIGNvbnN0IHVzZXJBZ2VudCA9IHJlcSA/IHJlcS5oZWFkZXJzW1widXNlci1hZ2VudFwiXSA6IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgICByZXR1cm4geyB1c2VyQWdlbnQ6IDEgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiBkYXRhLm1hcChhcnQgPT4gKFxyXG4gICAgICA8ZGl2IGtleT17YXJ0LnRpdGxlfT5cclxuICAgICAgICA8aDM+e2FydC50aXRsZX08L2gzPlxyXG4gICAgICAgIDxwPnthcnQuZGVzY308L3A+XHJcbiAgICAgICAgey8qIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBhcnQuYm9keSB9fT48L2Rpdj4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3Q7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYmxvZy9saXN0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTs7OztBQWRBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7QUFlQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9