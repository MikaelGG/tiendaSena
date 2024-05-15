"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _signIn = _interopRequireDefault(require("./routes/signIn.routes"));
var _user = _interopRequireDefault(require("./routes/user.routes"));
var _rawMaterial = _interopRequireDefault(require("./routes/rawMaterial.routes"));
var _utensil = _interopRequireDefault(require("./routes/utensil.routes"));
var _suppliers = _interopRequireDefault(require("./routes/suppliers.routes"));
var _consumer = _interopRequireDefault(require("./routes/consumer.routes"));
var _event = _interopRequireDefault(require("./routes/event.routes"));
var _products = _interopRequireDefault(require("./routes/products.routes"));
var _invoices = _interopRequireDefault(require("./routes/invoices.routes"));
var _dailyBalance = _interopRequireDefault(require("./routes/dailyBalance.routes"));
var _monthlyBalance = _interopRequireDefault(require("./routes/monthlyBalance.routes"));
var _expiration = _interopRequireDefault(require("./routes/expiration.routes"));
var _invoicesProd = _interopRequireDefault(require("./routes/invoicesProd.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//routes import

var app = (0, _express["default"])();

//Settings
app.set("port", 4000);

//middleware
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use((0, _cors["default"])());

//routes
app.use("/api/signIn", _signIn["default"]);
app.use("/api/user", _user["default"]);
app.use("/api/rawMaterial", _rawMaterial["default"]);
app.use("/api/utensil", _utensil["default"]);
app.use("/api/supplier", _suppliers["default"]);
app.use("/api/consumer", _consumer["default"]);
app.use("/api/event", _event["default"]);
app.use("/api/products", _products["default"]);
app.use("/api/invoice", _invoices["default"]);
app.use("/api/dailyBalance", _dailyBalance["default"]);
app.use("/api/monthlyBalance", _monthlyBalance["default"]);
app.use("/api/expiration", _expiration["default"]);
app.use("/api/invoiceProd", _invoicesProd["default"]);
var _default = exports["default"] = app;