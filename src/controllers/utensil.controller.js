import {getConnection} from "../model/database";

const crearUtensilio = async (req, res) => {
    try {
        const { nombre, cantidad, imagen} = req.body;
        const newUtensil = {
            nombre,
            cantidad,
            imagen
        }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO utensilios SET ?", newUtensil);
        res.json("Utensil added")
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const actualizarUtensilio = async (req, res) => {
    try {
        const { codigo } = req.params;
        const { imagen, nombre, cantidad } = req.body;
        const newUtensil = {
            codigo,
            nombre,
            cantidad,
            imagen
        }
        const connection = await getConnection();
        const result = await connection.query("UPDATE utensilios SET ? WHERE codigo = ?", [newUtensil, codigo]);
        res.json("Utensil updated");
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const mostrarUtensilio = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM utensilios");
        res.json(result[0]); 
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const mostrarUtensilioCod = async (req, res) => {
    try {
        const { codigo } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM utensilios WHERE codigo = ?", codigo);
        res.json(result[0]); 
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const eliminarUtensilio = async (req, res) => {
    try {
        const { codigo } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM utensilios WHERE codigo = ?", codigo);
        res.json("Utensil deleted");
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const querys = {
    crearUtensilio,
    actualizarUtensilio,
    mostrarUtensilio,
    mostrarUtensilioCod,
    eliminarUtensilio
}