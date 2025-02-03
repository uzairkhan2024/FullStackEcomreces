import { Router } from "express";

// Products Endpoint 
const router = Router();

router.get('/' , (req , res) =>{
  res.send('The List of all the Products');
});

router.get('/:id' ,(req , res)=>{
  res.send('A Product id');
});

router.post('/' , (req,res)=>{
  console.log(req.params);
  res.send('Created a new Product');
});

export default router;