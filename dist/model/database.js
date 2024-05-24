"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConnection = void 0;
var _promise = _interopRequireDefault(require("mysql2/promise"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import config from "../config";

var connection = _promise["default"].createPool({
  host: 'mysql.adso.cloud',
  database: 'bd_latiendadelcafe',
  user: 'user_latienda',
  password: 'Latienda2024*',
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