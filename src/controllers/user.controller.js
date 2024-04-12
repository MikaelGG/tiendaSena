import {getConnection} from "../model/database";

const agregarUsuario = async (req, res) => {
    try {
        const { nombre, apellido, correo, cedula } = req.body;
        const newUser = {
            nombre,
            apellido,
            correo,
            cedula
        };
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO usuarios SET ?", newUser);
        res.json("user added");
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const mostrarUsuarios = async (req,res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM usuarios");
        res.json(result[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const eliminarUsuario = async (req, res) => {
    try {
        const { cedula } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM usuarios WHERE cedula = ?", cedula);
        res.json("User deleted");
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const querys = {
    agregarUsuario,
    mostrarUsuarios,
    eliminarUsuario
}