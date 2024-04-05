import {Router} from "express";
import {querys as querysController} from "../controllers/event.controller";

const router=Router();


//POST
router.post("/", querysController.registrarEvento);


//GET
router.get("/", querysController.mostrarEventos);


//PUT



//DELETE
router.delete("/:codigo", querysController.eliminarEvento);


export default router;