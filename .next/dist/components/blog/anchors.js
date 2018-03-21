"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("next\\node_modules\\babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("next\\node_modules\\babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("next\\node_modules\\babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("next\\node_modules\\babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("next\\node_modules\\babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require("styled-jsx\\style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      while (i < l && getTop(anchorsEls[i]) < sTop + 20) {
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

      return _react2.default.createElement("div", { ref: "anchors", className: "jsx-3171224452" + " " + ("anchors " + (fixed ? "fixed" : ""))
      }, data.map(function (v, k) {
        return _react2.default.createElement("li", { key: k, className: "jsx-3171224452" + " " + ("" + (hash === v.title ? "active" : ""))
        }, _react2.default.createElement("a", { style: { marginLeft: v.level * 15 }, href: "#" + v.title, className: "jsx-3171224452"
        }, v.title));
      }), _react2.default.createElement(_style2.default, {
        styleId: "3171224452",
        css: [".anchors.jsx-3171224452{line-height:30px;border-left:1px solid #ddd;}", ".active.jsx-3171224452{background-color:#f3f3f3;color:green;box-sizing:border-box;border-left:2px solid green;}", ".anchors.fixed.jsx-3171224452{position:fixed;top:50px;}"]
      }));
    }
  }]);

  return Anchors;
}(_react.Component);

function getTop(el) {
  if (el.offsetParent && el.offsetParent !== document.body) {
    return el.offsetTop + getTop(el.offsetParent);
  } else {
    return el.offsetTop;
  }
}

exports.default = Anchors;