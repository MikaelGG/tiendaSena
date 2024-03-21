import {Router} from "express";
import {querys as querysController} from "../controllers/querys_controllers";

const router=Router();

//POST
router.post("/", querysController.crearProveedor);


//GET
router.get("/", querysController.mostrarProveedores);


//PUT



//DELETE



export default router;