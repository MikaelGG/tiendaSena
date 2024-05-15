"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var _default = exports["default"] = {
  host: process.env.HOST || "",
  database: process.env.DATABASE || "",
  user: process.env.USER || "",
  password: process.env.PASSWORD || ""
};