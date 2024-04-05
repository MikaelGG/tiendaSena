import {getConnection} from "../model/database";

const crearFacturaProd = async (req, res) => {
    try {
        const {id_producto, id_factura, precio_u, cantidad} = req.body
        const factProd = {
            id_producto, 
            id_factura, 
            precio_u, 
            cantidad
        }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO facturas_prod SET ?", factProd);
        res.json(result[0]);
        res.status(200);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

const mostrarProdctsFact = async (req, res) => {
    try {
        const {id_factura}  = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM facturas_prod WHERE id_factura = ?", id_factura);
        res.json(result[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}


export const querys = {
    crearFacturaProd,
    mostrarProdctsFact
}