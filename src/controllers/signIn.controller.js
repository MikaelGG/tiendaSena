import {getConnection} from "../model/database";
import jwt from "jsonwebtoken";

const key = process.env.SECRET;

function generateToken(user) {
    return jwt.sign(user, key, { expiresIn: '1m' });
}


const inicioSesion = async (req, res) => {
    try {
        const { cedula, correo } = req.body;
        const connection = await getConnection();
        const [users] = await connection.query('SELECT * FROM usuarios WHERE correo = ? AND cedula = ?', [correo, cedula]);
        
        const user = users[0];
        if (user.length === 0) {
            res.status(404).json({ error: 'Usuario o contraseña incorrectos', user});
            return;
        } else if (cedula === user.cedula){
            const token = generateToken(user);
            res.status(200).json({
                mensaje: 'Inicio de sesión exitoso',
                nombre: user.nombre,
                correo: user.correo,
                token: token
            });
        }    
    } catch (err) {
        console.error('Error al obtener usuario o contraseña:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const querys = {
    inicioSesion
}