"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _expiration = require("../controllers/expiration.controller");
var router = (0, _express.Router)();

//POST

//GET
router.get("/", _expiration.querys.vencimientoInsumo);

//PUT

//DELETE
var _default = exports["default"] = router;