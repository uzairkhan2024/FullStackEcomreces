import { Request , Response } from "express";
import { db } from "../../db/index";
import {productsTable} from '../../db/productsSchema';
import { eq } from "drizzle-orm";

export async function listsProducts(req:Request , res:Response){
    try{ 
        const products = await db.select().from(productsTable);
        res.json(products);
    } catch(e){
        res.status(500).send(e)
    }
};

export async function getProductsByid(req:Request , res:Response){
    try{ 
        const { id } = req.params;
        const products = await db.select().from(productsTable).where(eq(productsTable.id, Number(id)));

        if (!products) {
            res.status(404).send({ message: 'Product not found' });
          } else {
            res.json(products);
          }
    } catch(e){
        res.status(500).send(e)
    }
};


export async function CreateProducts(req: Request, res: Response) {
    try {
      console.log(req);
  
      const [product] = await db
        .insert(productsTable)
        .values(req.body)
        .returning();
      res.status(201).json(product);
    } catch (e) {
      res.status(500).send(e);
    }
  };

export async function updateProducts(req:Request , res:Response){
    try {
        const id = Number(req.params.id);
        const updatedFields = req.body;
    
        const [product] = await db
          .update(productsTable)
          .set(updatedFields)
          .where(eq(productsTable.id, id))
          .returning();
    
        if (product) {
          res.json(product);
        } else {
          res.status(404).send({ message: 'Product was not found' });
        }
      } catch (e) {
        res.status(500).send(e);
      }
};

export async function deleteProducts(req:Request , res:Response){
    try{ 
        const id = Number(req.params.id);
        const [deleteProduct] = await db.delete(productsTable).where(eq(productsTable.id,id))
        .returning();
    if (deleteProduct) {
      res.status(204).send();
    } else {
      res.status(404).send({ message: 'Product was not found' });
    }
    } catch(e){
        res.status(500).send(e)
    }
};