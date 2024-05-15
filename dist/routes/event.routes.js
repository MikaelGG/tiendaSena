"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _event = require("../controllers/event.controller");
var router = (0, _express.Router)();

//POST
router.post("/", _event.querys.registrarEvento);

//GET
router.get("/", _event.querys.mostrarEventos);

//PUT

//DELETE
router["delete"]("/:codigo", _event.querys.eliminarEvento);
var _default = exports["default"] = router;