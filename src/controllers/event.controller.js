import {getConnection} from "../model/database";

const registrarEvento = async (req, res) => {
    try {
        const { titulo, fecha, hora_inicio, hora_fin, imagen, descripcion, cupo} = req.body;
        const newEvent = {
            titulo,
            fecha,
            hora_inicio,
            hora_fin, 
            imagen, 
            descripcion, 
            cupo
        }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO eventos SET ?", newEvent);
        res.json("Event added");
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const mostrarEventos = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM eventos");
        res.json(result[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const eliminarEvento = async (req, res) => {
    try {
        const { codigo } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM eventos WHERE codigo = ?", codigo);
        res.json("Event deleted");
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

export const querys = {
    registrarEvento,
    mostrarEventos,
    eliminarEvento
}