import {Router} from "express";
import {querys as querysController} from "../controllers/querys_controllers";

const router=Router();

//POST



//GET
router.get("/", querysController.mostrarVentasMes);
router.get("/in", querysController.ingresosMes);
router.get("/eg", querysController.egresosMes);



//PUT



//DELETE



export default router;