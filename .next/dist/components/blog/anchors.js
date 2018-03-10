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

var _jsxFileName = "E:\\blog\\blog-next\\components\\blog\\anchors.js";


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
        css: ".anchors.jsx-3171224452{line-height:30px;border-left:1px solid #ddd;}.active.jsx-3171224452{background-color:#f3f3f3;color:green;box-sizing:border-box;border-left:2px solid green;}.anchors.fixed.jsx-3171224452{position:fixed;top:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGJsb2dcXGFuY2hvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaURvQixBQUc4QixBQUtqQixBQUtlLGVBQ04sRUFWa0IsT0FXN0IsQ0FQYyxZQUNVLE9BSnhCLGVBSzhCLDRCQUM5QiIsImZpbGUiOiJjb21wb25lbnRzXFxibG9nXFxhbmNob3JzLmpzIiwic291cmNlUm9vdCI6IkU6L2Jsb2cvYmxvZy1uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY2xhc3MgQW5jaG9ycyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICB0b3A6IDAsXHJcbiAgICBmaXhlZDogZmFsc2UsXHJcbiAgICBhbmNob3JzRWxzOiBudWxsLFxyXG4gICAgaGFzaDogXCJcIlxyXG4gIH07XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYW5jaG9yc1wiKSxcclxuICAgICAgYW5jaG9yc0VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhW25hbWVdXCIpLFxyXG4gICAgICB0b3AgPSBnZXRUb3AoZWwpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRvcCwgYW5jaG9yc0VscyB9KTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGUgPT4ge1xyXG4gICAgICB0aGlzLnNjcm9sbChlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBzY3JvbGwoZSkge1xyXG4gICAgY29uc3QgeyB0b3AsIGFuY2hvcnNFbHMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgc1RvcCA9XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZml4ZWQ6IHRvcCA8IHNUb3AgKyA1MCB9KTtcclxuXHJcbiAgICBsZXQgaSA9IDAsXHJcbiAgICAgIGwgPSBhbmNob3JzRWxzLmxlbmd0aCxcclxuICAgICAgaGFzaCA9IFwiXCI7XHJcbiAgICB3aGlsZSAoZ2V0VG9wKGFuY2hvcnNFbHNbaV0pIDwgc1RvcCArIDIwICYmIGkgPCBsKSB7XHJcbiAgICAgIGhhc2ggPSBhbmNob3JzRWxzW2ldLmdldEF0dHJpYnV0ZShcIm5hbWVcIik7XHJcbiAgICAgIGkrKztcclxuICAgIH1cclxuICAgIGlmIChoYXNoICYmIGhhc2ggIT09IHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNoIH0pO1xyXG4gICAgICAvLyB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHsgZml4ZWQsIGhhc2ggfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGFuY2hvcnMgJHtmaXhlZCA/IFwiZml4ZWRcIiA6IFwiXCJ9YH0gcmVmPVwiYW5jaG9yc1wiPlxyXG4gICAgICAgIHtkYXRhLm1hcCgodiwgaykgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17a30gY2xhc3NOYW1lPXtgJHtoYXNoID09PSB2LnRpdGxlID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgICAgIDxhIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IHYubGV2ZWwgKiAxNSB9fSBocmVmPXtgIyR7di50aXRsZX1gfT5cclxuICAgICAgICAgICAgICB7di50aXRsZX1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuYW5jaG9ycyB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmM1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgZ3JlZW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYW5jaG9ycy5maXhlZCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VG9wKGVsKSB7XHJcbiAgaWYgKGVsLm9mZnNldFBhcmVudCkge1xyXG4gICAgcmV0dXJuIGVsLm9mZnNldFRvcCArIGdldFRvcChlbC5vZmZzZXRQYXJlbnQpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZWwub2Zmc2V0VG9wO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5jaG9ycztcclxuIl19 */\n/*@ sourceURL=components\\blog\\anchors.js */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGJsb2dcXGFuY2hvcnMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJBbmNob3JzIiwic3RhdGUiLCJ0b3AiLCJmaXhlZCIsImFuY2hvcnNFbHMiLCJoYXNoIiwiZWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2V0VG9wIiwic2V0U3RhdGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsIiwiZSIsInNUb3AiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJpIiwibCIsImxlbmd0aCIsImdldEF0dHJpYnV0ZSIsImxvY2F0aW9uIiwiZGF0YSIsInByb3BzIiwibWFwIiwidiIsImsiLCJ0aXRsZSIsIm1hcmdpbkxlZnQiLCJsZXZlbCIsIm9mZnNldFBhcmVudCIsIm9mZnNldFRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7Ozs7Ozs7SUFFVixBOzs7Ozs7Ozs7Ozs7Ozs4TSxBQUNKO1dBQVEsQUFDRCxBQUNMO2FBRk0sQUFFQyxBQUNQO2tCQUhNLEFBR00sQUFDWjtZQUpNLEFBSUEsQTtBQUpBLEFBQ047Ozs7O3dDQUtrQjttQkFDbEI7O1VBQU0sS0FBSyxTQUFBLEFBQVMsY0FBcEIsQUFBVyxBQUF1QjtVQUNoQyxhQUFhLFNBQUEsQUFBUyxpQkFEeEIsQUFDZSxBQUEwQjtVQUN2QyxNQUFNLE9BRlIsQUFFUSxBQUFPLEFBQ2Y7V0FBQSxBQUFLLFNBQVMsRUFBRSxLQUFGLEtBQU8sWUFBckIsQUFBYyxBQUNkO2FBQUEsQUFBTyxpQkFBUCxBQUF3QixVQUFVLGFBQUssQUFDckM7ZUFBQSxBQUFLLE9BQUwsQUFBWSxBQUNiO0FBRkQsQUFHRDs7OzsyQixBQUNNLEdBQUc7bUJBQ29CLEtBRHBCLEFBQ3lCO1VBRHpCLEFBQ0EsYUFEQSxBQUNBO1VBREEsQUFDSyxvQkFETCxBQUNLLEFBQ2I7O1VBQUksT0FDRixTQUFBLEFBQVMsZ0JBQVQsQUFBeUIsYUFBYSxTQUFBLEFBQVMsZ0JBRGpELEFBQ2lFLEFBRWpFOztXQUFBLEFBQUssU0FBUyxFQUFFLE9BQU8sTUFBTSxPQUE3QixBQUFjLEFBQXNCLEFBRXBDOztVQUFJLElBQUosQUFBUTtVQUNOLElBQUksV0FETixBQUNpQjtVQUNmLE9BRkYsQUFFUyxBQUNUO2FBQU8sT0FBTyxXQUFQLEFBQU8sQUFBVyxNQUFNLE9BQXhCLEFBQStCLE1BQU0sSUFBNUMsQUFBZ0QsR0FBRyxBQUNqRDtlQUFPLFdBQUEsQUFBVyxHQUFYLEFBQWMsYUFBckIsQUFBTyxBQUEyQixBQUNsQztBQUNEO0FBQ0Q7VUFBSSxRQUFRLFNBQVMsT0FBQSxBQUFPLFNBQTVCLEFBQXFDLE1BQU0sQUFDekM7YUFBQSxBQUFLLFNBQVMsRUFBRSxNQUFoQixBQUFjLEFBQ2Q7QUFDRDtBQUNGOzs7OzZCQUNRO1VBQUEsQUFDQyxPQUFTLEtBRFYsQUFDZSxNQURmLEFBQ0M7b0JBQ2dCLEtBRmpCLEFBRXNCO1VBRnRCLEFBRUMsZ0JBRkQsQUFFQztVQUZELEFBRVEsZUFGUixBQUVRLEFBQ2Y7OzZCQUNFLGNBQUEsU0FBbUQsS0FBbkQsQUFBdUQsOERBQTVCLFFBQUEsQUFBUSxVQUFuQyxBQUE2Qzs7b0JBQTdDO3NCQUFBLEFBQ0c7QUFESDtPQUFBLE9BQ0csQUFBSyxJQUFJLFVBQUEsQUFBQyxHQUFELEFBQUksR0FBSjsrQkFDUixjQUFBLFFBQUksS0FBSixBQUFTLDhDQUFpQixTQUFTLEVBQVQsQUFBVyxRQUFYLEFBQW1CLFdBQTdDLEFBQXdEOztzQkFBeEQ7d0JBQUEsQUFDRTtBQURGO1NBQUEsa0JBQ0UsY0FBQSxPQUFHLE9BQU8sRUFBRSxZQUFZLEVBQUEsQUFBRSxRQUExQixBQUFVLEFBQXdCLE1BQU0sWUFBVSxFQUFsRCxBQUFvRCxrQkFBcEQ7O3NCQUFBO3dCQUFBLEFBQ0c7QUFESDthQUZNLEFBQ1IsQUFDRSxBQUNLO0FBSlgsQUFDRztpQkFESDthQURGLEFBQ0UsQUEwQkg7QUExQkc7Ozs7O0EsQUF2Q2dCOztBQW9FdEIsU0FBQSxBQUFTLE9BQVQsQUFBZ0IsSUFBSSxBQUNsQjtNQUFJLEdBQUosQUFBTyxjQUFjLEFBQ25CO1dBQU8sR0FBQSxBQUFHLFlBQVksT0FBTyxHQUE3QixBQUFzQixBQUFVLEFBQ2pDO0FBRkQsU0FFTyxBQUNMO1dBQU8sR0FBUCxBQUFVLEFBQ1g7QUFDRjtBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6ImFuY2hvcnMuanMiLCJzb3VyY2VSb290IjoiRTovYmxvZy9ibG9nLW5leHQifQ==