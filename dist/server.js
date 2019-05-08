"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); //Settings

app.set('port', process.env.PORT || 3000); //Routes

app.get('/', function (req, res) {
  return res.send('Hello world');
});
var _default = app;
exports["default"] = _default;