"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _signIn = require("../controllers/signIn.controller");
var router = (0, _express.Router)();

//POST
router.post("/", _signIn.querys.inicioSesion);

//GET

//PUT

//DELETE
var _default = exports["default"] = router;