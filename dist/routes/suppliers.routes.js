"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _suppliers = require("../controllers/suppliers.controller");
var router = (0, _express.Router)();

//POST
router.post("/", _suppliers.querys.crearProveedor);

//GET
router.get("/", _suppliers.querys.mostrarProveedores);

//PUT

//DELETE
var _default = exports["default"] = router;