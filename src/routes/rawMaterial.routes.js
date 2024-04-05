import {Router} from "express";
import {querys as querysController} from "../controllers/rawMaterial.controller";

const router=Router();

//POST
router.post("/", querysController.crearInsumo);

//GET
router.get("/", querysController.mostrarInsumos);
router.get("/:codigo", querysController.mostrarInsumoCod);


//PUT
router.put("/:codigo", querysController.actualizarInsumo);


//DELETE
router.delete("/:codigo", querysController.eliminarInsumo);



export default router;