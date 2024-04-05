import {getConnection} from "../model/database";


const vencimientoInsumo = async  (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM insumos WHERE f_vencimiento BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 5 DAY)");
        res.json(result[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const querys = {
    vencimientoInsumo
}