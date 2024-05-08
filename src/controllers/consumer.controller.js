import {getConnection} from "../model/database";

const crearConsumidor = async (req, res) => {
    try {
        const { cedula, nombre, apellido, telefono } = req.body;
        const newConsumer = {
            cedula, 
            nombre,
            apellido,
            telefono
        }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO consumidores SET ?", newConsumer);
        res.json("Consumer added");
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const mostarConsumidor = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM consumidores");
        res.json(result[0]);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};


export const querys = {
    crearConsumidor,
    mostarConsumidor
}