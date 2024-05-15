"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _invoices = require("../controllers/invoices.controller");
var router = (0, _express.Router)();

//POST
router.post("/", _invoices.querys.crearFactura);

//GET
router.get("/", _invoices.querys.mostrarFactura);

//PUT

//DELETE
router["delete"]("/:nro", _invoices.querys.eliminarFactura);
var _default = exports["default"] = router;