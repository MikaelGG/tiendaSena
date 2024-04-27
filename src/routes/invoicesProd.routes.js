import {Router} from "express";
import {querys as querysController} from "../controllers/invoicesProd.controller";

const router=Router();

//POST
router.post("/", querysController.crearFacturaProd)

//GET
router.get("/:id_factura", querysController.mostrarProdctsFact)
router.get("/modal/:id_factura", querysController.mostrarFactura)

//PUT



//DELETE



export default router;