import {Router} from "express";
import {querys as querysController} from "../controllers/signIn.controller";

const router=Router();

//POST
router.post("/", querysController.inicioSesion);



//GET


//PUT



//DELETE




export default router;