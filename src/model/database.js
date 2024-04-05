import mysql from "mysql2/promise";
import config from "../config";

const connection = mysql.createPool({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
    waitForConnections: true,
    connectionLimit: 10, 
    queueLimit: 0
});

// export default connection;



export const getConnection = () => {
    return connection;
};

// module.export = {
//     getConnection
// };

