import {getConnection} from "../model/database";

const mostrarVentasMes = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT f.fecha as fecha, c.nombre as nombreConsumidor, c.apellido as apellidoConsumidor, f.total as total FROM facturas f inner join consumidores c on f.consumidor = c.cedula WHERE MONTH(fecha) = MONTH(CURDATE()) AND YEAR(fecha) = YEAR(CURDATE())");
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