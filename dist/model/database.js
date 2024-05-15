"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConnection = void 0;
var _promise = _interopRequireDefault(require("mysql2/promise"));
var _config = _interopRequireDefault(require("../config"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var connection = _promise["default"].createPool({
  host: _config["default"].host,
  database: _config["default"].database,
  user: _config["default"].user,
  password: _config["default"].password,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// export default connection;

var getConnection = exports.getConnection = function getConnection() {
  return connection;
};

// module.export = {
//     getConnection
// };