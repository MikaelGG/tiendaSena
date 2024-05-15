"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _products = require("../controllers/products.controller");
var router = (0, _express.Router)();

//POST
router.post("/", _products.querys.crearProducto);

//GET
router.get("/", _products.querys.mostrarProducto);
router.get("/:codigo", _products.querys.mostrarProductoId);

//PUT
router.put("/:codigo", _products.querys.actualizarProducto);

//DELETE
router["delete"]("/:codigo", _products.querys.eliminarProducto);
var _default = exports["default"] = router;