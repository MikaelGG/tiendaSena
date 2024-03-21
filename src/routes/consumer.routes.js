import { Router } from "express";
import { querys as querysController } from "./../controllers/querys_controllers";

const router = Router();

//POST
router.post("/", querysController.crearConsumidor);

//GET
router.get("/", querysController.mostarConsumidor);


//PUT



//DELETE



export default router;