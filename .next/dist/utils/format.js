"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (t) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy年MM月dd日 hh:mm:ss';

  var time = new Date(t);
  var o = {
    "M+": time.getMonth() + 1, //month
    "d+": time.getDate(), //day
    "h+": time.getHours(), //hour
    "m+": time.getMinutes(), //minute
    "s+": time.getSeconds(), //second
    "q+": Math.floor((time.getMonth() + 3) / 3), //quarter
    "S": time.getMilliseconds() //millisecond
  };
  if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
  }return format;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzXFxmb3JtYXQuanMiXSwibmFtZXMiOlsidCIsImZvcm1hdCIsInRpbWUiLCJEYXRlIiwibyIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJnZXRNaWxsaXNlY29uZHMiLCJ0ZXN0IiwicmVwbGFjZSIsIlJlZ0V4cCIsIiQxIiwiZ2V0RnVsbFllYXIiLCJzdWJzdHIiLCJsZW5ndGgiLCJrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBQWUsVUFBQSxBQUFVLEdBQW9DO01BQWpDLEFBQWlDLDZFQUF4QixBQUF3QixBQUMzRDs7TUFBSSxPQUFPLElBQUEsQUFBSSxLQUFmLEFBQVcsQUFBUyxBQUNwQjtNQUFJO1VBQ0ksS0FBQSxBQUFLLGFBREwsQUFDa0IsR0FBRyxBQUMzQjtVQUFNLEtBRkEsQUFFQSxBQUFLLFdBQVcsQUFDdEI7VUFBTSxLQUhBLEFBR0EsQUFBSyxZQUFZLEFBQ3ZCO1VBQU0sS0FKQSxBQUlBLEFBQUssY0FBYyxBQUN6QjtVQUFNLEtBTEEsQUFLQSxBQUFLLGNBQWMsQUFDekI7VUFBTSxLQUFBLEFBQUssTUFBTSxDQUFDLEtBQUEsQUFBSyxhQUFOLEFBQW1CLEtBTjlCLEFBTUEsQUFBbUMsSUFBSSxBQUM3QztTQUFLLEtBUEMsQUFPRCxBQUFLLGtCQVBaLEFBQVEsQUFPc0IsQUFFOUI7QUFUUSxBQUNOO01BUUUsT0FBQSxBQUFPLEtBQVgsQUFBSSxBQUFZLFNBQVMsU0FBUyxPQUFBLEFBQU8sUUFBUSxPQUFmLEFBQXNCLElBQUksQ0FBQyxLQUFBLEFBQUssZ0JBQU4sQUFBc0IsSUFBdEIsQUFBMEIsT0FBTyxJQUFJLE9BQUEsQUFBTyxHQUEvRSxBQUFTLEFBQTBCLEFBQStDLEFBQzNHO09BQUssSUFBTCxBQUFTLEtBQVQsQUFBYyxHQUFHO1FBQUksSUFBQSxBQUFJLE9BQU8sTUFBQSxBQUFNLElBQWpCLEFBQXFCLEtBQXJCLEFBQTBCLEtBQTlCLEFBQUksQUFBK0IsU0FBUyxTQUFTLE9BQUEsQUFBTyxRQUFRLE9BQWYsQUFBc0IsSUFBSSxPQUFBLEFBQU8sR0FBUCxBQUFVLFVBQVYsQUFBb0IsSUFBSSxFQUF4QixBQUF3QixBQUFFLEtBQUssQ0FBQyxPQUFPLEVBQVIsQUFBUSxBQUFFLElBQVYsQUFBYyxPQUFPLENBQUMsS0FBSyxFQUFOLEFBQU0sQUFBRSxJQUE1SixBQUE2RCxBQUFTLEFBQXlELEFBQWlDO0FBQ2hLLFVBQUEsQUFBTyxBQUNSIiwiZmlsZSI6ImZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiJFOi9ibG9nLW5leHQifQ==