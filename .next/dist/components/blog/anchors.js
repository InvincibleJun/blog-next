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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "E:\\blog-next\\components\\blog\\anchors.js";


var Anchors = function (_Component) {
  (0, _inherits3.default)(Anchors, _Component);

  function Anchors() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Anchors);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Anchors.__proto__ || (0, _getPrototypeOf2.default)(Anchors)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      top: 0,
      fixed: false,
      anchorsEls: null,
      hash: ""
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Anchors, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var el = document.querySelector(".anchors"),
          anchorsEls = document.querySelectorAll("a[name]"),
          top = getTop(el);
      this.setState({ top: top, anchorsEls: anchorsEls });
      window.addEventListener("scroll", function (e) {
        _this2.scroll(e);
      });
    }
  }, {
    key: "scroll",
    value: function scroll(e) {
      var _state = this.state,
          top = _state.top,
          anchorsEls = _state.anchorsEls;

      var sTop = document.documentElement.scrollTop || document.documentElement.scrollTop;

      this.setState({ fixed: top < sTop + 50 });

      var i = 0,
          l = anchorsEls.length,
          hash = "";
      while (getTop(anchorsEls[i]) < sTop + 20 && i < l) {
        hash = anchorsEls[i].getAttribute("name");
        i++;
      }
      if (hash && hash !== window.location.hash) {
        this.setState({ hash: hash });
        // window.location.hash = hash;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.props.data;
      var _state2 = this.state,
          fixed = _state2.fixed,
          hash = _state2.hash;

      return _react2.default.createElement("div", { ref: "anchors", className: "jsx-3171224452" + " " + ("anchors " + (fixed ? "fixed" : "")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, data.map(function (v, k) {
        return _react2.default.createElement("li", { key: k, className: "jsx-3171224452" + " " + ("" + (hash === v.title ? "active" : "")),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, _react2.default.createElement("a", { style: { marginLeft: v.level * 15 }, href: "#" + v.title, className: "jsx-3171224452",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        }, v.title));
      }), _react2.default.createElement(_style2.default, {
        styleId: "3171224452",
        css: ".anchors.jsx-3171224452{line-height:30px;border-left:1px solid #ddd;}.active.jsx-3171224452{background-color:#f3f3f3;color:green;box-sizing:border-box;border-left:2px solid green;}.anchors.fixed.jsx-3171224452{position:fixed;top:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGJsb2dcXGFuY2hvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaURvQixBQUc4QixBQUtqQixBQUtlLGVBQ04sRUFWa0IsT0FXN0IsQ0FQYyxZQUNVLE9BSnhCLGVBSzhCLDRCQUM5QiIsImZpbGUiOiJjb21wb25lbnRzXFxibG9nXFxhbmNob3JzLmpzIiwic291cmNlUm9vdCI6IkU6L2Jsb2ctbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNsYXNzIEFuY2hvcnMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgdG9wOiAwLFxyXG4gICAgZml4ZWQ6IGZhbHNlLFxyXG4gICAgYW5jaG9yc0VsczogbnVsbCxcclxuICAgIGhhc2g6IFwiXCJcclxuICB9O1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFuY2hvcnNcIiksXHJcbiAgICAgIGFuY2hvcnNFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVtuYW1lXVwiKSxcclxuICAgICAgdG9wID0gZ2V0VG9wKGVsKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB0b3AsIGFuY2hvcnNFbHMgfSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBlID0+IHtcclxuICAgICAgdGhpcy5zY3JvbGwoZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgc2Nyb2xsKGUpIHtcclxuICAgIGNvbnN0IHsgdG9wLCBhbmNob3JzRWxzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IHNUb3AgPVxyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZpeGVkOiB0b3AgPCBzVG9wICsgNTAgfSk7XHJcblxyXG4gICAgbGV0IGkgPSAwLFxyXG4gICAgICBsID0gYW5jaG9yc0Vscy5sZW5ndGgsXHJcbiAgICAgIGhhc2ggPSBcIlwiO1xyXG4gICAgd2hpbGUgKGdldFRvcChhbmNob3JzRWxzW2ldKSA8IHNUb3AgKyAyMCAmJiBpIDwgbCkge1xyXG4gICAgICBoYXNoID0gYW5jaG9yc0Vsc1tpXS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpO1xyXG4gICAgICBpKys7XHJcbiAgICB9XHJcbiAgICBpZiAoaGFzaCAmJiBoYXNoICE9PSB3aW5kb3cubG9jYXRpb24uaGFzaCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgaGFzaCB9KTtcclxuICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xyXG4gICAgfVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7IGZpeGVkLCBoYXNoIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BhbmNob3JzICR7Zml4ZWQgPyBcImZpeGVkXCIgOiBcIlwifWB9IHJlZj1cImFuY2hvcnNcIj5cclxuICAgICAgICB7ZGF0YS5tYXAoKHYsIGspID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e2t9IGNsYXNzTmFtZT17YCR7aGFzaCA9PT0gdi50aXRsZSA/IFwiYWN0aXZlXCIgOiBcIlwifWB9PlxyXG4gICAgICAgICAgICA8YSBzdHlsZT17eyBtYXJnaW5MZWZ0OiB2LmxldmVsICogMTUgfX0gaHJlZj17YCMke3YudGl0bGV9YH0+XHJcbiAgICAgICAgICAgICAge3YudGl0bGV9XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmFuY2hvcnMge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjNcclxuICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGdyZWVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFuY2hvcnMuZml4ZWQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRvcChlbCkge1xyXG4gIGlmIChlbC5vZmZzZXRQYXJlbnQpIHtcclxuICAgIHJldHVybiBlbC5vZmZzZXRUb3AgKyBnZXRUb3AoZWwub2Zmc2V0UGFyZW50KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGVsLm9mZnNldFRvcDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuY2hvcnM7XHJcbiJdfQ== */\n/*@ sourceURL=components\\blog\\anchors.js */"
      }));
    }
  }]);

  return Anchors;
}(_react.Component);

function getTop(el) {
  if (el.offsetParent) {
    return el.offsetTop + getTop(el.offsetParent);
  } else {
    return el.offsetTop;
  }
}

exports.default = Anchors;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGJsb2dcXGFuY2hvcnMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJBbmNob3JzIiwic3RhdGUiLCJ0b3AiLCJmaXhlZCIsImFuY2hvcnNFbHMiLCJoYXNoIiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2V0VG9wIiwic2V0U3RhdGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsIiwiZSIsInNUb3AiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJpIiwibCIsImxlbmd0aCIsImdldEF0dHJpYnV0ZSIsImxvY2F0aW9uIiwiZGF0YSIsInByb3BzIiwibWFwIiwidiIsImsiLCJ0aXRsZSIsIm1hcmdpbkxlZnQiLCJsZXZlbCIsIm9mZnNldFBhcmVudCIsIm9mZnNldFRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7Ozs7Ozs7SUFFVixBOzs7Ozs7Ozs7Ozs7Ozs4TSxBQUNKO1dBQVEsQUFDRCxBQUNMO2FBRk0sQUFFQyxBQUNQO2tCQUhNLEFBR00sQUFDWjtZQUpNLEFBSUEsQTtBQUpBLEFBQ047Ozs7O3dDQUtrQjttQkFDbEI7O1VBQU0sS0FBSyxTQUFBLEFBQVMsY0FBcEIsQUFBVyxBQUF1QjtVQUNoQyxhQUFhLFNBQUEsQUFBUyxpQkFEeEIsQUFDZSxBQUEwQjtVQUN2QyxNQUFNLE9BRlIsQUFFUSxBQUFPLEFBQ2Y7V0FBQSxBQUFLLFNBQVMsRUFBRSxLQUFGLEtBQU8sWUFBckIsQUFBYyxBQUNkO2FBQUEsQUFBTyxpQkFBUCxBQUF3QixVQUFVLGFBQUssQUFDckM7ZUFBQSxBQUFLLE9BQUwsQUFBWSxBQUNiO0FBRkQsQUFHRDs7OzsyQixBQUNNLEdBQUc7bUJBQ29CLEtBRHBCLEFBQ3lCO1VBRHpCLEFBQ0EsYUFEQSxBQUNBO1VBREEsQUFDSyxvQkFETCxBQUNLLEFBQ2I7O1VBQUksT0FDRixTQUFBLEFBQVMsZ0JBQVQsQUFBeUIsYUFBYSxTQUFBLEFBQVMsZ0JBRGpELEFBQ2lFLEFBRWpFOztXQUFBLEFBQUssU0FBUyxFQUFFLE9BQU8sTUFBTSxPQUE3QixBQUFjLEFBQXNCLEFBRXBDOztVQUFJLElBQUosQUFBUTtVQUNOLElBQUksV0FETixBQUNpQjtVQUNmLE9BRkYsQUFFUyxBQUNUO2FBQU8sT0FBTyxXQUFQLEFBQU8sQUFBVyxNQUFNLE9BQXhCLEFBQStCLE1BQU0sSUFBNUMsQUFBZ0QsR0FBRyxBQUNqRDtlQUFPLFdBQUEsQUFBVyxHQUFYLEFBQWMsYUFBckIsQUFBTyxBQUEyQixBQUNsQztBQUNEO0FBQ0Q7VUFBSSxRQUFRLFNBQVMsT0FBQSxBQUFPLFNBQTVCLEFBQXFDLE1BQU0sQUFDekM7YUFBQSxBQUFLLFNBQVMsRUFBRSxNQUFoQixBQUFjLEFBQ2Q7QUFDRDtBQUNGOzs7OzZCQUNRO1VBQUEsQUFDQyxPQUFTLEtBRFYsQUFDZSxNQURmLEFBQ0M7b0JBQ2dCLEtBRmpCLEFBRXNCO1VBRnRCLEFBRUMsZ0JBRkQsQUFFQztVQUZELEFBRVEsZUFGUixBQUVRLEFBQ2Y7OzZCQUNFLGNBQUEsU0FBbUQsS0FBbkQsQUFBdUQsOERBQTVCLFFBQUEsQUFBUSxVQUFuQyxBQUE2Qzs7b0JBQTdDO3NCQUFBLEFBQ0c7QUFESDtPQUFBLE9BQ0csQUFBSyxJQUFJLFVBQUEsQUFBQyxHQUFELEFBQUksR0FBSjsrQkFDUixjQUFBLFFBQUksS0FBSixBQUFTLDhDQUFpQixTQUFTLEVBQVQsQUFBVyxRQUFYLEFBQW1CLFdBQTdDLEFBQXdEOztzQkFBeEQ7d0JBQUEsQUFDRTtBQURGO1NBQUEsa0JBQ0UsY0FBQSxPQUFHLE9BQU8sRUFBRSxZQUFZLEVBQUEsQUFBRSxRQUExQixBQUFVLEFBQXdCLE1BQU0sWUFBVSxFQUFsRCxBQUFvRCxrQkFBcEQ7O3NCQUFBO3dCQUFBLEFBQ0c7QUFESDthQUZNLEFBQ1IsQUFDRSxBQUNLO0FBSlgsQUFDRztpQkFESDthQURGLEFBQ0UsQUEwQkg7QUExQkc7Ozs7O0EsQUF2Q2dCOztBQW9FdEIsU0FBQSxBQUFTLE9BQVQsQUFBZ0IsSUFBSSxBQUNsQjtNQUFJLEdBQUosQUFBTyxjQUFjLEFBQ25CO1dBQU8sR0FBQSxBQUFHLFlBQVksT0FBTyxHQUE3QixBQUFzQixBQUFVLEFBQ2pDO0FBRkQsU0FFTyxBQUNMO1dBQU8sR0FBUCxBQUFVLEFBQ1g7QUFDRjtBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6ImFuY2hvcnMuanMiLCJzb3VyY2VSb290IjoiRTovYmxvZy1uZXh0In0=