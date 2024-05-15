"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _rawMaterial = require("../controllers/rawMaterial.controller");
var router = (0, _express.Router)();

//POST
router.post("/", _rawMaterial.querys.crearInsumo);

//GET
router.get("/", _rawMaterial.querys.mostrarInsumos);
router.get("/:codigo", _rawMaterial.querys.mostrarInsumoCod);

//PUT
router.put("/:codigo", _rawMaterial.querys.actualizarInsumo);

//DELETE
router["delete"]("/:codigo", _rawMaterial.querys.eliminarInsumo);
var _default = exports["default"] = router;