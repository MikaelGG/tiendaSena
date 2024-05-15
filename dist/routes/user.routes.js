"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _user = require("../controllers/user.controller");
var router = (0, _express.Router)();

//POST
router.post("/", _user.querys.agregarUsuario);

//GET
router.get("/", _user.querys.mostrarUsuarios);

//PUT

//DELETE
router["delete"]("/:cedula", _user.querys.eliminarUsuario);
var _default = exports["default"] = router;