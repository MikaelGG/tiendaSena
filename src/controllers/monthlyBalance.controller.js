import {getConnection} from "../model/database";

const mostrarVentasMes = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT f.nro as nroFactura, c.nombre as nombreConsumidor, p.nombre as nombreProducto, f.cantidad as cantidad, f.total as total from facturas f inner join consumidores c on f.consumidor = c.cedula inner join productos p on f.producto = p.codigo WHERE MONTH(fecha) = MONTH(CURDATE()) AND YEAR(fecha) = YEAR(CURDATE())");
        res.json(result[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const ingresosMes = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT COALESCE(SUM(total), 0) as Ingresos FROM facturas WHERE MONTH(fecha) = MONTH(CURDATE()) AND YEAR(fecha) = YEAR(CURDATE())");
        res.json(result[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const egresosMes = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT COALESCE(SUM(total), 0) as Egresos FROM facturas WHERE total < 0 AND MONTH(fecha) = MONTH(CURDATE()) AND YEAR(fecha) = YEAR(CURDATE())");
        res.json(result[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const querys = {
    mostrarVentasMes,
    ingresosMes,
    egresosMes
}