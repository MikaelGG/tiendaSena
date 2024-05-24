import mysql from "mysql2/promise";
// import config from "../config";

const connection = mysql.createPool({
    host: 'mysql.adso.cloud',
    database: 'bd_latiendadelcafe',
    user: 'user_latienda',
    password: 'Latienda2024*',
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

