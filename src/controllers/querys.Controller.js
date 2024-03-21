const express = require("express");
const app = express();
const mysql = require("mysql2/promise");
const cors = require("cors")
const multer = require('multer');
const path = require("path");

//Configure Multer Disk Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname));
    },
});

//Filter Multer Files With Mime Type
const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/svg"
    ) {
        cb(null, true);
    } else {
        cb(null, false);
        console.log("Invalid File Extension");
    }
};

// Use Body Parser, Express Static, Multer
//   app.use(bodyParser.urlencoded({ extended: false }));
app.use(
    multer({ storage: storage, fileFilter: fileFilter }).fields([
        { name: "songfile", maxCount: 1 },
        { name: "cover", maxCount: 1 },
    ])
);
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "images")));
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "senacafe"
});

//login



//login
app.post("/login", (req, res) => {
    const { correo, contrasena } = req.body;

    // Buscar el usuario en la base de datos
    db.query("SELECT * FROM usuarios WHERE correo = ?", [correo], (err, user) => {
        console.log(user[0]);
        if (err) {
            res.status(500).json({ error: "Error al obtener usuario" });
        } else if (!user.length) {
            res.status(404).json({ error: "Usuario o contraseña incorrectos" });
        } else {
            // Comparar la contraseña proporcionada con la contraseña almacenada
            if (contrasena !== user[0].cedula) {
                res.status(401).json({ error: "Usuario o contraseña incorrectos" });
            } else {
                // Generar una respuesta con el usuario
                const response = {
                    nombre: user[0].nombre,
                    correo: user[0].correo,
                };
                // Enviar la respuesta al cliente
                res.send(response);
            }
        }
    });
});




//usuarios
app.post("/create", (req, res) => {
    const cedula = req.body.cedula;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correo = req.body.correo;

    db.query('INSERT INTO usuarios(cedula, nombre, apellido, correo) VALUES(?,?,?,?)', [cedula, nombre, apellido, correo],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("usuario registrado");
            }
        }
    );
});

app.get("/usuarios", (req, res) => {
    let response
    db.query('SELECT * FROM usuarios',
        (err, result) => {
            if (err) {
                response = err
            } else {
                response = res.send(result);
            }
        }
    );
    return response
});

app.delete("/deleteUsuarios/:cedula", (req, res) => {
    const cedula = req.params.cedula;

    db.query('DELETE from usuarios WHERE cedula=?', [cedula],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("usuario eliminado con exito");
            }
        }
    );
});

//insumos
app.post("/createInsumos", (req, res) => {
    const codigo = req.body.codigo;
    const nombre = req.body.nombre;
    const cantidad = req.body.cantidad;
    const imagen = req.body.imagen;
    const f_ingreso = req.body.f_ingreso;
    const f_vencimiento = req.body.f_vencimiento;
    const costo = req.body.costo;

    db.query('INSERT INTO insumos(codigo, nombre, cantidad, imagen, f_ingreso, f_vencimiento, costo) VALUES(?,?,?,?,?,?,?)', [codigo, nombre, cantidad, imagen, f_ingreso, f_vencimiento, costo],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("insumo registrado");
            }
        }
    );
});

app.put("/updateInsumos", (req, res) => {
    const codigo = req.body.codigo;
    const nombre = req.body.nombre;
    const cantidad = req.body.cantidad;
    const imagen = req.body.imagen;
    const f_ingreso = req.body.f_ingreso;
    const f_vencimiento = req.body.f_vencimiento;
    const costo = req.body.costo;
    console.log(f_ingreso);
    db.query('UPDATE insumos SET imagen=?, nombre=?, cantidad=?, f_ingreso=?, f_vencimiento=?, costo=? WHERE codigo=?', [imagen, nombre, cantidad, f_ingreso, f_vencimiento, costo, codigo],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("insumo actualizado");
            }
        }
    );
});
app.get("/insumos", (req, res) => {
    let response
    db.query('SELECT * FROM insumos',
        (err, result) => {
            if (err) {
                response = err
            } else {
                response = res.send(result);
            }
        }
    );
    return response
});
app.get("/insumo/:codigo", (req, res) => {
    const codigo = req.params.codigo;
    let response
    db.query('SELECT * FROM insumos WHERE codigo=?', [codigo], 
        (err, result) => {
            if (err) {
                response = err
            } else {
                response = res.send(result[0]);
            }
        }
    );
    return response
});
app.delete("/deleteInsumos/:codigo", (req, res) => {
    const codigo = req.params.codigo;

    db.query('DELETE from insumos WHERE codigo=?', [codigo],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("insumo eliminado con exito");
            }
        }
    );
});
//utensilios
app.post("/createUtensilios", (req, res) => {
    const codigo = req.body.codigo;
    const nombre = req.body.nombre;
    const cantidad = req.body.cantidad;
    const imagen = req.body.imagen;

    db.query('INSERT INTO utensilios(codigo, nombre, cantidad, imagen) VALUES(?,?,?,?)', [codigo, nombre, cantidad, imagen],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("utensilio registrado");
            }
        }
    );
});
app.put("/updateUtensilios", (req, res) => {
    const codigo = req.body.codigo
    const imagen = req.body.imagen;
    const nombre = req.body.nombre;
    const cantidad = req.body.cantidad;
    db.query('UPDATE utensilios SET imagen=?, nombre=?, cantidad=? WHERE codigo=?', [imagen, nombre, cantidad, codigo],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("utensilio actualizado");
            }
        }
    );
});
app.get("/utensilios", (req, res) => {
    let response
    db.query('SELECT * FROM utensilios',
        (err, result) => {
            if (err) {
                response = err
            } else {
                response = res.send(result);
            }
        }
    );
    return response
});

app.get("/utensilio/:codigo", (req, res) => {
    const codigo = req.params.codigo;
    let response
    db.query('SELECT * FROM utensilios WHERE codigo=?', [codigo],
        (err, result) => {
            if (err) {
                response = err
            } else {
                response = res.send(result[0]);
            }
        }
    );
    return response
});

app.delete("/deleteUtensilios/:codigo", (req, res) => {
    const codigo = req.params.codigo;

    db.query('DELETE from utensilios WHERE codigo=?', [codigo],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("utensilio eliminado con exito");
            }
        }
    );
});
//proveedores
app.post("/createProveedores", (req, res) => {
    const nit = req.body.nit;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const direccion = req.body.direccion;
    const telefono = req.body.telefono;

    db.query('INSERT INTO proveedores(nit, nombre, apellido, direccion, telefono) VALUES(?,?,?,?,?)', [nit, nombre, apellido, direccion, telefono],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("proveedor registrado");
            }
        }
    );
});

app.get("/proveedores", (req, res) => {
    let response
    db.query('SELECT * FROM proveedores',
        (err, result) => {
            if (err) {
                response = err
            } else {
                response = res.send(result);
            }
        }
    );
    return response
});
//consumidores
app.post("/createConsumidores", (req, res) => {
    const cedula = req.body.cedula;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const telefono = req.body.telefono;

    db.query('INSERT INTO consumidores(cedula, nombre, apellido, telefono) VALUES(?,?,?,?)', [cedula, nombre, apellido, telefono],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("consumidor registrado");
            }
        }
    );
});
app.get("/consumidores", (req, res) => {
    let response
    db.query('SELECT * FROM consumidores',
        (err, result) => {
            if (err) {
                response = err
            } else {
                response = res.send(result);
            }
        }
    );
    return response
});
//evento
app.post("/registrarEvento", (req, res) => {
    const codigo = req.body.codigo
    const fecha = req.body.fecha;
    const hora_inicio = req.body.hora_inicio;
    const hora_fin = req.body.hora_fin;
    const imagen = req.body.imagen;
    const descripcion = req.body.descripcion;
    const cupo = req.body.cupo;


    db.query('INSERT INTO eventos(codigo, fecha, hora_inicio, hora_fin, imagen, descripcion, cupo) VALUES(?,?,?,?,?,?,?)', [codigo, fecha, hora_inicio, hora_fin, imagen, descripcion, cupo],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("evento registrado");
            }
        }
    );
});
app.get("/eventos", (req, res) => {
    let response
    db.query('SELECT * FROM eventos',
        (err, result) => {
            if (err) {
                response = err
            } else {
                response = res.send(result);
            }
        }
    );
    return response
});
app.delete("/deleteEventos/:codigo", (req, res) => {
    const codigo = req.params.codigo;

    db.query('DELETE from eventos WHERE codigo=?', [codigo],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("evento eliminado con exito");
            }
        }
    );
});
//productos
app.post("/createProductos", (req, res) => {
    const codigo = req.body.codigo;
    const imagen = req.body.imagen;
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const precio = req.body.precio;
    const cantidad = req.body.cantidad;



    db.query('INSERT INTO productos(codigo, imagen, nombre, descripcion, precio, cantidad) VALUES(?,?,?,?,?,?)', [codigo, imagen, nombre, descripcion, precio, cantidad],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("producto registrado");

            }
        }
    );
});
app.put("/updateProductos", (req, res) => {
    const codigo = req.body.codigo
    const imagen = req.body.imagen;
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const precio = req.body.precio;
    const cantidad = req.body.cantidad;
    db.query('UPDATE productos SET imagen=?, nombre=?, descripcion=?, precio=?, cantidad=? WHERE codigo=?', [imagen, nombre, descripcion, precio, cantidad, codigo],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("producto actualizado");
            }
        }
    );
});

app.get("/productos", (req, res) => {
    let response
    db.query('SELECT * FROM productos',
        (err, result) => {
            if (err) {
                response = err
            } else {
                response = res.send(result);
            }
        }
    );
    return response
});
app.get("/producto/:codigo", (req, res) => {
    const codigo = req.params.codigo;
    let response
    db.query('SELECT * FROM productos WHERE codigo=?', [codigo],
        (err, result) => {
            if (err) {
                response = err
            } else {
                response = res.send(result[0]);
            }
        }
    );
    return response
});
app.delete("/deleteProductos/:codigo", (req, res) => {
    const codigo = req.params.codigo;

    db.query('DELETE from facturas WHERE producto=?', [codigo],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("producto eliminado con exito");
            }
        }
    );
    db.query('DELETE from productos WHERE codigo=?', [codigo],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {

            }
        }
    );
});

//Facturas
app.post("/createFacturas", (req, res) => {
    const nro = req.body.nro
    const fecha = req.body.fecha;
    const estado = req.body.estado;
    const subtotal = req.body.subtotal;
    const total = req.body.total;
    const precio = req.body.precio;
    const cantidad = req.body.cantidad;
    const consumidor = req.body.consumidor;
    const producto = req.body.producto;

    db.query('INSERT INTO facturas(nro, fecha, estado, cantidad, precio, subtotal, total, consumidor, producto) VALUES(?,?,?,?,?,?,?,?,?)', [nro, fecha, estado, cantidad, precio, subtotal, total, consumidor, producto],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {

                res.send("factura registrada");

            }
        }
    );
});
app.get("/facturas", (req, res) => {
    let response
    db.query('SELECT * FROM facturas',
        (err, result) => {
            if (err) {
                response = err
            } else {
                response = res.send(result);
            }
        }
    );
    return response
});

//balance diario
app.get("/diario", (req, res) => {
    let response
    db.query('SELECT * FROM facturas WHERE DATE(fecha) = CURDATE()',
        (err, result) => {
            if (err) {
                response = err
            } else {
                response = res.send(result);
            }
        }
    );
    return response
});
//balance mensual
app.get("/mensual", (req, res) => {
    let response
    db.query('SELECT * FROM facturas WHERE MONTH(fecha) = MONTH(CURDATE()) AND YEAR(fecha) = YEAR(CURDATE())',
        (err, result) => {
            if (err) {
                response = err
            } else {
                response = res.send(result);
            }
        }
    );
    return response
});
//proximos  a vencer
app.get("/vencimiento", (req, res) => {
    let response
    db.query('SELECT * FROM insumos WHERE f_vencimiento >= CURRENT_DATE - INTERVAL 5 DAY',
        (err, result) => {
            if (err) {
                response = err
            } else {
                response = res.send(result);
            }
        }
    );
    return response
});
app.listen(3001, () => {
    console.log("corriendo en el puerto 3001")
})


