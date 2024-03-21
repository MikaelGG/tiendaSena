import {getConnection} from "../model/database";


// pruebas para el funcionamiento del CRUD
const getExamp = async (req, res) => {
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM usuarios");
        console.log(result);
        res.json(result);

    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const addExamp = async (req, res) => {
    try{
        const { cedula, nombre, apellido, correo } = req.body;
        if (cedula === undefined || nombre === undefined || apellido === undefined || correo === undefined) {
            res.status(400).json({message: "Bad request. Please fill all field."});
        }

        const newuser = { cedula, nombre, apellido, correo };
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO usuarios SET ?", newuser);
        res.json("User added");

    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const addExampId = async (req, res) => {
    try{
        const { cedula } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM usuarios WHERE cedula = ?", cedula);
        res.json(result);

    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const deleteExampId = async (req, res) => {
    try{
        const { cedula } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM usuarios WHERE cedula = ?", cedula);
        res.json(result);

    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const updateExamp = async (req, res) => {
    try{
        const { cedula } = req.params;
        const {nombre, apellido, correo } = req.body;
        if (cedula === undefined || nombre === undefined || apellido === undefined || correo === undefined) {
            res.status(400).json({message: "Bad request. Please fill all field."});
        }

        const newuser = {nombre, apellido, correo };
        const connection = await getConnection();
        const result = await connection.query("UPDATE usuarios SET ? WHERE cedula = ?", [newuser, cedula]);
        res.json(result);

    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};
// finalizacion de pruebas al CRUD


// Iniciar sesion
const inicioSesion = async (req, res) => {
    try {
        const { cedula, correo } = req.body;
        const connection = await getConnection();
        const [users] = await connection.query('SELECT * FROM usuarios WHERE correo = ? AND cedula = ?', [correo, cedula]);
        const user = users[0];
        if (users.length === 0) {
            res.status(404).json({ error: 'Usuario o contraseña incorrectos' });
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
  

//  usuarios
async function agregarUsuario(req, res) {
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

        res.json("user add");
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
}

const mostrarUsuarios = async (req,res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM usuarios");
        res.json(result);
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
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};


// Insumos
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
        res.json(result);
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
        res.json(result);
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

const vencimientoInsumo = async  (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM insumos WHERE f_vencimiento BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 5 DAY)");
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};


//Utensilios
const crearUtensilio = async (req, res) => {
    try {
        const { codigo, nombre, cantidad, imagen} = req.body;
        const newUtensil = {
            codigo,
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
        res.json(result); 
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
        res.json(result); 
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

// proveedores
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
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};


//Consumidores 
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
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};


//Evento
const registrarEvento = async (req, res) => {
    try {
        const { codigo, fecha, hora_inicio, hora_fin, imagen, descripcion, cupo} = req.body;
        const newEvent = {
            codigo,
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
        res.json(result);
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


//Productos
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
        res.json(result);
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


//Facturas
const crearFactura = async (req, res) => {
    try {
        const { nro, fecha, estado, subtotal, total, precio, cantidad, consumidor, producto } = req.body;
        const newInvoice = {
            nro, 
            fecha, 
            estado, 
            subtotal, 
            total, 
            precio, 
            cantidad, 
            consumidor, 
            producto
        }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO facturas SET ?", newInvoice);
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const mostrarFactura = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM facturas");
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};


// Balance diario
const mostrarVentasDia = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT f.nro as nroFactura, c.nombre as nombreConsumidor, p.nombre as nombreProducto, f.cantidad as cantidad, f.total as total from facturas f inner join consumidores c on f.consumidor = c.cedula inner join productos p on f.producto = p.codigo WHERE DATE(fecha) = CURDATE();");
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const ingresosDia = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT COALESCE(SUM(total), 0) as Ingresos FROM facturas WHERE DATE(fecha) = CURDATE()");
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const egresoDia = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT COALESCE(SUM(total), 0) as Egresos FROM facturas WHERE total < 0 AND fecha = CURDATE()");
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};


// Balance mensual
const mostrarVentasMes = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT f.nro as nroFactura, c.nombre as nombreConsumidor, p.nombre as nombreProducto, f.cantidad as cantidad, f.total as total from facturas f inner join consumidores c on f.consumidor = c.cedula inner join productos p on f.producto = p.codigo WHERE MONTH(fecha) = MONTH(CURDATE()) AND YEAR(fecha) = YEAR(CURDATE())");
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const ingresosMes = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT COALESCE(SUM(total), 0) as Ingresos FROM facturas WHERE MONTH(fecha) = MONTH(CURDATE()) AND YEAR(fecha) = YEAR(CURDATE())");
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};

const egresosMes = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT COALESCE(SUM(total), 0) as Egresos FROM facturas WHERE total < 0 AND MONTH(fecha) = MONTH(CURDATE()) AND YEAR(fecha) = YEAR(CURDATE())");
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
};


export const querys = {
    getExamp,
    addExamp,
    addExampId,
    deleteExampId,
    updateExamp,
    inicioSesion,
    agregarUsuario,
    mostrarUsuarios,
    eliminarUsuario,
    crearInsumo,
    actualizarInsumo,
    mostrarInsumos,
    mostrarInsumoCod,
    eliminarInsumo,
    crearUtensilio,
    actualizarUtensilio,
    mostrarUtensilio,
    mostrarUtensilioCod,
    eliminarUtensilio,
    crearProveedor,
    mostrarProveedores,
    crearConsumidor,
    mostarConsumidor,
    registrarEvento,
    mostrarEventos,
    eliminarEvento,
    crearProducto,
    actualizarProducto,
    mostrarProducto,
    eliminarProducto,
    crearFactura,
    mostrarFactura,
    vencimientoInsumo,
    mostrarVentasDia,
    mostrarVentasMes,
    ingresosDia,
    ingresosMes,
    egresoDia,
    egresosMes
};