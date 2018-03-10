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

var _blog = require("../../services/blog");

var _format = require("../../utils/format");

var _format2 = _interopRequireDefault(_format);

var _link = require("next\\dist\\lib\\link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "E:\\blog-next\\components\\blog\\new-list.js";


var NewList = function (_Component) {
  (0, _inherits3.default)(NewList, _Component);

  function NewList(props) {
    (0, _classCallCheck3.default)(this, NewList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NewList.__proto__ || (0, _getPrototypeOf2.default)(NewList)).call(this, props));

    _this.state = {
      data: []
    };
    return _this;
  }

  (0, _createClass3.default)(NewList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      (0, _blog.getNewList)().then(function (res) {
        _this2.setState({ data: res.data.data });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.state.data;

      return _react2.default.createElement("div", {
        className: "jsx-2900454302" + " " + "chunk-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, data.map(function (line) {
        return _react2.default.createElement(_link2.default, { key: line._id, as: "/blog/" + line._id, href: "/blog/article?_id=" + line._id, __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }, _react2.default.createElement("div", {
          className: "jsx-2900454302" + " " + "list-line",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }, line.title, _react2.default.createElement("span", {
          className: "jsx-2900454302",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }, (0, _format2.default)(line.createTime, 'MM-dd'))));
      }), _react2.default.createElement(_style2.default, {
        styleId: "2900454302",
        css: ".list-line.jsx-2900454302{line-height:28px;font-size:14px;cursor:pointer;}.list-line.jsx-2900454302:hover{border-bottom:1px solid #ccc;}span.jsx-2900454302{float:right;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGJsb2dcXG5ldy1saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCb0IsQUFHNEIsQUFLWSxBQUdqQixZQUNHLEtBUkEsVUFTakIsRUFKQSxHQUpnQixlQUNoQiIsImZpbGUiOiJjb21wb25lbnRzXFxibG9nXFxuZXctbGlzdC5qcyIsInNvdXJjZVJvb3QiOiJFOi9ibG9nLW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldE5ld0xpc3QgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ibG9nJztcclxuaW1wb3J0IGZvcm1hdCBmcm9tIFwiLi4vLi4vdXRpbHMvZm9ybWF0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNsYXNzIE5ld0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRhdGE6IFtdXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgZ2V0TmV3TGlzdCgpLnRoZW4ocmVzID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IHJlcy5kYXRhLmRhdGEgfSlcclxuICAgIH0pXHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaHVuay1ib3JkZXJcIj5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBkYXRhLm1hcChsaW5lID0+IChcclxuICAgICAgICAgICAgPExpbmsga2V5PXtsaW5lLl9pZH0gYXM9e2AvYmxvZy8ke2xpbmUuX2lkfWB9IGhyZWY9e2AvYmxvZy9hcnRpY2xlP19pZD0ke2xpbmUuX2lkfWB9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1saW5lXCI+e2xpbmUudGl0bGV9PHNwYW4+e2Zvcm1hdChsaW5lLmNyZWF0ZVRpbWUsICdNTS1kZCcpfTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5saXN0LWxpbmUge1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpc3QtbGluZTpob3ZlciB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdMaXN0O1xyXG5cclxuIl19 */\n/*@ sourceURL=components\\blog\\new-list.js */"
      }));
    }
  }]);

  return NewList;
}(_react.Component);

exports.default = NewList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGJsb2dcXG5ldy1saXN0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZ2V0TmV3TGlzdCIsImZvcm1hdCIsIkxpbmsiLCJOZXdMaXN0IiwicHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJ0aGVuIiwic2V0U3RhdGUiLCJyZXMiLCJtYXAiLCJsaW5lIiwiX2lkIiwidGl0bGUiLCJjcmVhdGVUaW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFrQjs7QUFDM0IsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7Ozs7OztJLEFBRUQ7bUNBQ0o7O21CQUFBLEFBQVksT0FBTzt3Q0FBQTs7d0lBQUEsQUFDWCxBQUNOOztVQUFBLEFBQUs7WUFGWSxBQUVqQixBQUFhLEFBQ0w7QUFESyxBQUNYO1dBRUg7Ozs7O3dDQUNtQjttQkFDbEI7OzhCQUFBLEFBQWEsS0FBSyxlQUFPLEFBQ3ZCO2VBQUEsQUFBSyxTQUFTLEVBQUUsTUFBTSxJQUFBLEFBQUksS0FBMUIsQUFBYyxBQUFpQixBQUNoQztBQUZELEFBR0Q7Ozs7NkJBQ1E7VUFBQSxBQUNDLE9BQVMsS0FEVixBQUNlLE1BRGYsQUFDQyxBQUNSOzs2QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBRUk7QUFGSjtBQUFBLE9BQUEsT0FFSSxBQUFLLElBQUksZ0JBQUE7K0JBQ1AsQUFBQyxnQ0FBSyxLQUFLLEtBQVgsQUFBZ0IsS0FBSyxlQUFhLEtBQWxDLEFBQXVDLEtBQU8sNkJBQTJCLEtBQXpFLEFBQThFO3NCQUE5RTt3QkFBQSxBQUNFO0FBREY7U0FBQSxrQkFDRSxjQUFBOzhDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQTRCO0FBQTVCO0FBQUEsZ0JBQUEsQUFBaUMsQUFBTSx1QkFBQSxjQUFBO3FCQUFBOztzQkFBQTt3QkFBQSxBQUFPO0FBQVA7QUFBQSxpQ0FBYyxLQUFQLEFBQVksWUFGckQsQUFDUCxBQUNFLEFBQXVDLEFBQU8sQUFBd0I7QUFKOUUsQUFFSTtpQkFGSjthQURGLEFBQ0UsQUF3Qkg7QUF4Qkc7Ozs7O0FBZmdCLEEsQUEwQ3RCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy1saXN0LmpzIiwic291cmNlUm9vdCI6IkU6L2Jsb2ctbmV4dCJ9