import {Router} from "express";
import {querys as querysController} from "../controllers/products.controller";

const router=Router();

//POST
router.post("/", querysController.crearProducto);


//GET
router.get("/", querysController.mostrarProducto);
router.get("/:codigo", querysController.mostrarProductoId);


//PUT
router.put("/:codigo", querysController.actualizarProducto);



//DELETE
router.delete("/:codigo", querysController.eliminarProducto);



export default router;