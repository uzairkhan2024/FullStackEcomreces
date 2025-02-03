import { Router } from "express";
import { listsProducts , getProductsByid , updateProducts ,CreateProducts, deleteProducts } from "./productsController";

// Products Endpoint 
const router = Router();

router.get('/', listsProducts);
router.get('/:id' ,getProductsByid);
router.post('/' , CreateProducts);
router.put('/:id' , updateProducts)
router.delete('/:id' , deleteProducts)

export default router;