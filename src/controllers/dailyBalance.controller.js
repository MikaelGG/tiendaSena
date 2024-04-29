import {getConnection} from "../model/database";

const mostrarVentasDia = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT f.fecha as fecha, c.nombre as nombreConsumidor, c.apellido as apellidoConsumidor, f.total as total from facturas f inner join consumidores c on f.consumidor = c.cedula WHERE DATE(fecha) = CURDATE()");
        res.json(result[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const ingresosDia = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT COALESCE(SUM(total), 0) as Ingresos FROM facturas WHERE DATE(fecha) = CURDATE()");
        res.json(result[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const egresoDia = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT COALESCE(SUM(total), 0) as Egresos FROM facturas WHERE total < 0 AND fecha = CURDATE()");
        res.json(result[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const querys = {
    mostrarVentasDia,
    ingresosDia,
    egresoDia
}