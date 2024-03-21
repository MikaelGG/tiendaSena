import {Router} from "express";
import {querys as querysController} from "../controllers/querys_controllers";

const router=Router();

//POST
router.post("/:correo", querysController.inicioSesion);


//GET


//PUT



//DELETE




export default router;