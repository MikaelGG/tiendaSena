import {Router} from "express";
import {querys as querysController} from "../controllers/invoicesProd.controller";

const router=Router();

//POST
router.post("/", querysController.crearFacturaProd)

//GET
router.get("/:id_factura", querysController.mostrarProdctsFact)

//PUT



//DELETE



export default router;