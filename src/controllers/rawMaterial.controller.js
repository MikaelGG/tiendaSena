import {getConnection} from "../model/database";

const crearInsumo = async (req, res) => {
    try {
        const { codigo, nombre, cantidad, imagen, f_ingreso, f_vencimiento, costo } = req.body;
        const newRawMaterial = {
            codigo,
            nombre,
            cantidad,
            imagen,
            f_ingreso,
            f_vencimiento,
            costo
        }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO insumos SET ?", newRawMaterial);
        res.json("Raw material added");
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const actualizarInsumo = async (req, res) => {
    try {
        const { codigo } = req.params;
        const { nombre, cantidad, imagen, f_ingreso, f_vencimiento, costo } = req.body;
        const newRawMaterial = {
            nombre,
            cantidad,
            imagen,
            f_ingreso,
            f_vencimiento,
            costo
        }
        const connection = await getConnection();
        const result = await connection.query("UPDATE insumos SET ? WHERE codigo = ?", [newRawMaterial, codigo]);
        res.json("Raw material updated");  
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const mostrarInsumos = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM insumos");
        res.json(result[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const mostrarInsumoCod = async (req, res) => {
    try {
        const { codigo } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM insumos WHERE codigo  = ?", codigo);
        res.json(result[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const eliminarInsumo = async (req, res) => {
    try {
        const { codigo } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM insumos WHERE codigo = ?", codigo);
        res.json("Raw material deleted");
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};


export const querys = {
    crearInsumo,
    actualizarInsumo,
    mostrarInsumos,
    mostrarInsumoCod,
    eliminarInsumo
}