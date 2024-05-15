"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _monthlyBalance = require("../controllers/monthlyBalance.controller");
var router = (0, _express.Router)();

//POST

//GET
router.get("/", _monthlyBalance.querys.mostrarVentasMes);
router.get("/in", _monthlyBalance.querys.ingresosMes);
router.get("/eg", _monthlyBalance.querys.egresosMes);

//PUT

//DELETE
var _default = exports["default"] = router;