import {Router} from "express";
import {querys as querysController} from "../controllers/querys_controllers";

const router=Router();

//POST
router.post("/", querysController.crearFactura);


//GET
router.get("/", querysController.mostrarFactura);


//PUT



//DELETE



export default router;