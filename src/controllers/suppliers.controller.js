import {getConnection} from "../model/database";

const crearProveedor = async (req, res) => {
    try {
        const { nit, nombre, apellido, direccion, telefono } = req.body;
        const newSupplier = {
            nit,
            nombre,
            apellido,
            direccion,
            telefono
        }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO proveedores SET ?", newSupplier);
        res.json("Supplier added");
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const mostrarProveedores = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM proveedores");
        res.json(result[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const querys = {
    crearProveedor,
    mostrarProveedores
}