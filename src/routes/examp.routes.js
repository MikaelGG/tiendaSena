import {Router} from "express";
import {querys as querysController} from "../controllers/querys_controllers";

const router=Router();


//POST
router.post("/", querysController.addExamp);



//GET
router.get("/", querysController.getExamp);
router.get("/:cedula", querysController.addExampId);



//PUT
router.put("/:cedula", querysController.updateExamp);


//DELETE
router.delete("/:cedula", querysController.deleteExampId);



export default router;