import {Router} from "express";
import {querys as querysController} from "../controllers/invoices.controller";

const router=Router();

//POST
router.post("/", querysController.crearFactura);


//GET
router.get("/", querysController.mostrarFactura);
router.get("/:fechaList", querysController.mostrarFacturaFecha);


//PUT



//DELETE
router.delete("/:nro", querysController.eliminarFactura);


export default router;