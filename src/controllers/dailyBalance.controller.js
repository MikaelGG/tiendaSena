import {getConnection} from "../model/database";

const mostrarVentasDia = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT f.nro as nroFactura, c.nombre as nombreConsumidor, p.nombre as nombreProducto, f.total as total from facturas f inner join consumidores c on f.consumidor = c.cedula inner join productos p on f.producto = p.codigo WHERE DATE(fecha) = CURDATE();");
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