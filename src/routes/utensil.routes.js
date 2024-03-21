import {Router} from "express";
import {querys as querysController} from "../controllers/querys_controllers";

const router=Router();

//POST
router.post("/", querysController.crearUtensilio);


//GET
router.get("/", querysController.mostrarUtensilio);
router.get("/:codigo", querysController.mostrarUtensilioCod);


//PUT
router.put("/:codigo", querysController.actualizarUtensilio);


//DELETE
router.delete("/:codigo", querysController.eliminarUtensilio);



export default router;