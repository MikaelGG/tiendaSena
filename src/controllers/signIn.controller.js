import {getConnection} from "../model/database";

const inicioSesion = async (req, res) => {
    try {
        const { cedula, correo } = req.body;
        const connection = await getConnection();
        const [users] = await connection.query('SELECT * FROM usuarios WHERE correo = ? AND cedula = ?', [correo, cedula]);
        
        const user = users[0];
        if (users.length === 0) {
            res.status(404).json({ error: 'Usuario o contraseña incorrectos', users});
            return;
        } else if (cedula === user.cedula){
            res.status(200).json({
                mensaje: 'Inicio de sesión exitoso',
                nombre: user.nombre,
                correo: user.correo
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