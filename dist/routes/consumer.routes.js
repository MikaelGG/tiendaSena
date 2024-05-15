"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _consumer = require("./../controllers/consumer.controller");
var router = (0, _express.Router)();

//POST
router.post("/", _consumer.querys.crearConsumidor);

//GET
router.get("/", _consumer.querys.mostarConsumidor);

//PUT

//DELETE
var _default = exports["default"] = router;