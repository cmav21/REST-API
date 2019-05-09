"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./routes/index.routes"));

var _task = _interopRequireDefault(require("./routes/task.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import express, {json} from 'express';
//Another way to import json
var app = (0, _express["default"])(); //Routes

//Settings
app.set('port', process.env.PORT || 3000); //Middleware, functions which are executed before access to routes

app.use(_express["default"].json()); //This to understand the json format
//Routes

app.use(_index["default"]);
app.use('/tasks', _task["default"]);
var _default = app;
exports["default"] = _default;