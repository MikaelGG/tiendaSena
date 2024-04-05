import {getConnection} from "../model/database";

const crearProducto = async (req, res) => {
    try {
        const { codigo, imagen, nombre, descripcion, precio, cantidad } = req.body;
        const newProduct = {
            codigo, 
            imagen, 
            nombre, 
            descripcion, 
            precio, 
            cantidad
        }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO productos SET ?", newProduct);
        res.json("Product added");
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const actualizarProducto = async (req, res) => {
    try {
        const { codigo } = req.params;
        const { imagen, nombre, descripcion, precio, cantidad } = req.body;
        const newProduct = {
            codigo, 
            imagen, 
            nombre, 
            descripcion, 
            precio, 
            cantidad
        }
        const connection = await getConnection();
        const result = await connection.query("UPDATE productos SET ? WHERE codigo = ?", [newProduct, codigo]);
        res.json("Product updated");
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const mostrarProducto = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM productos");
        res.json(result[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const mostrarProductoId = async (req, res) => {
    try {
        const { codigo } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM productos WHERE codigo = ?", codigo);
        res.json(result[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const eliminarProducto = async (req, res) => {
    try {
        const { codigo } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM productos WHERE codigo = ?", codigo);
        res.json("Product deleted");
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const querys = {
    crearProducto,
    actualizarProducto,
    mostrarProducto,
    mostrarProductoId,
    eliminarProducto
}