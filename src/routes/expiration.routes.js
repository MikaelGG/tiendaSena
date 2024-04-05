import {Router} from "express";
import {querys as querysController} from "../controllers/expiration.controller";

const router=Router();

//POST


//GET
router.get("/", querysController.vencimientoInsumo);


//PUT



//DELETE



export default router;