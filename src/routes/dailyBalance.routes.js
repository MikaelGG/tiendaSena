import { Router } from "express";
import { querys as querysController } from "./../controllers/querys_controllers";

const router = Router();

//POST


//GET
router.get("/", querysController.mostrarVentasDia);
router.get("/in", querysController.ingresosDia);
router.get("/eg", querysController.egresoDia);


//PUT



//DELETE



export default router;