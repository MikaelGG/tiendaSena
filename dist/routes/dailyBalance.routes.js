"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _dailyBalance = require("./../controllers/dailyBalance.controller");
var router = (0, _express.Router)();

//POST

//GET
router.get("/", _dailyBalance.querys.mostrarVentasDia);
router.get("/in", _dailyBalance.querys.ingresosDia);
router.get("/eg", _dailyBalance.querys.egresoDia);

//PUT

//DELETE
var _default = exports["default"] = router;