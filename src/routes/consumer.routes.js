import { Router } from "express";
import { querys as querysController } from "./../controllers/consumer.controller";

const router = Router();

//POST
router.post("/", querysController.crearConsumidor);

//GET
router.get("/", querysController.mostarConsumidor);


//PUT



//DELETE


export default router;