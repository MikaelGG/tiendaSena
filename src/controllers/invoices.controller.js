import {getConnection} from "../model/database";

const crearFactura = async (req, res) => {
    try {
        const { fecha, estado, total, producto, consumidor } = req.body;
        const newInvoice = {
            fecha, 
            estado,
            total,
            producto, 
            consumidor
        }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO facturas SET ?", newInvoice);
        res.json(result[0].insertId);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const mostrarFactura = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT f.*, p.nombre as nombreProducto FROM facturas f inner join productos p on f.producto = p.codigo");
        res.json(result[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const querys = {
    crearFactura,
    mostrarFactura
}