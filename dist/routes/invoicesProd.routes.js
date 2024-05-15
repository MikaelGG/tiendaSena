"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _invoicesProd = require("../controllers/invoicesProd.controller");
var router = (0, _express.Router)();

//POST
router.post("/", _invoicesProd.querys.crearFacturaProd);

//GET
router.get("/:id_factura", _invoicesProd.querys.mostrarProdctsFact);
router.get("/modal/:id_factura", _invoicesProd.querys.mostrarFactura);

//PUT

//DELETE
var _default = exports["default"] = router;