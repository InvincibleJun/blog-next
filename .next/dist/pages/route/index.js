'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('next\\node_modules\\babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next\\node_modules\\babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next\\node_modules\\babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require('next\\node_modules\\babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _colors = require('material-ui/styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  line-height: 40px;\n  height: 400px;\n  /* background-image: url(', '); */\n  overflow: hidden;  \n  opacity: 0.8;\n  box-shadow: 0 4px 5px 0px #ccc;\n'], ['\n  line-height: 40px;\n  height: 400px;\n  /* background-image: url(', '); */\n  overflow: hidden;  \n  opacity: 0.8;\n  box-shadow: 0 4px 5px 0px #ccc;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  width: 300px;\n  height: 200px;\n  margin: 200px auto 0;\n  color: white;\n  font-size: 30px;\n  line-height: 60px;\n  text-shadow: 2px 2px 5px #FF0000;\n'], ['\n  width: 300px;\n  height: 200px;\n  margin: 200px auto 0;\n  color: white;\n  font-size: 30px;\n  line-height: 60px;\n  text-shadow: 2px 2px 5px #FF0000;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  width: 30px;\n  height: 30px;\n  font-size: 20px;\n'], ['\n  width: 30px;\n  height: 30px;\n  font-size: 20px;\n']);
// import bg from '../../assets/img/bg-big.jpg';


var Container = _styledComponents2.default.div(_templateObject, bg);

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
      return _react2.default.createElement(Container, null, _react2.default.createElement(Title, null, _react2.default.createElement('p', null, 'WHY ARE YOU LINE'), _react2.default.createElement('p', null, 'FOR BETTER LIFE'), _react2.default.createElement(Down, null, _react2.default.createElement('i', { className: 'iconfont icon-down' }, ' '))));
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;