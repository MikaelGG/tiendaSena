import {Router} from "express";
import {querys as querysController} from "../controllers/querys_controllers";

const router=Router();

//POST


//GET
router.get("/", querysController.vencimientoInsumo);


//PUT



//DELETE



export default router;