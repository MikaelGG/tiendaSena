import {Router} from "express";
import {querys as querysController} from "../controllers/querys_controllers";

const router=Router();

//POST
router.post("/", querysController.crearProducto);


//GET
router.get("/", querysController.mostrarProducto);


//PUT
router.put("/:codigo", querysController.actualizarProducto);



//DELETE
router.delete("/:codigo", querysController.eliminarProducto);



export default router;