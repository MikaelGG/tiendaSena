"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _utensil = require("../controllers/utensil.controller");
var router = (0, _express.Router)();

//POST
router.post("/", _utensil.querys.crearUtensilio);

//GET
router.get("/", _utensil.querys.mostrarUtensilio);
router.get("/:codigo", _utensil.querys.mostrarUtensilioCod);

//PUT
router.put("/:codigo", _utensil.querys.actualizarUtensilio);

//DELETE
router["delete"]("/:codigo", _utensil.querys.eliminarUtensilio);
var _default = exports["default"] = router;