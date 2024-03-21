import {Router} from "express";
import {querys as querysController} from "../controllers/querys_controllers";

const router=Router();

//POST
router.post("/", querysController.agregarUsuario);


//GET
router.get("/", querysController.mostrarUsuarios);


//PUT



//DELETE
router.delete("/:cedula", querysController.eliminarUsuario);



export default router;