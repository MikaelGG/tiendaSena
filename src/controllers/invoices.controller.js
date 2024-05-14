import {getConnection} from "../model/database";

const crearFactura = async (req, res) => {
    try {
        const { fecha, estado, total, consumidor } = req.body;
        const newInvoice = {
            fecha, 
            estado,
            total,
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
        const result = await connection.query("SELECT f.*, c.nombre as nombreConsumidor, c.apellido as apellidoConsumidor FROM facturas f inner join consumidores c on c.cedula = f.consumidor ");
        res.json(result[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const eliminarFactura = async (req, res) => {
    try {
        const { nro } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM facturas_prod WHERE id_factura = ?", nro);
        const result2 = await connection.query("DELETE FROM facturas WHERE nro = ?", nro);
        res.json("Invoices deleted");
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

export const querys = {
    crearFactura,
    mostrarFactura,
    eliminarFactura
}