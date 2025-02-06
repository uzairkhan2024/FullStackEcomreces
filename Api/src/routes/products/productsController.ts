import { Request , Response } from "express";

export function listsProducts(req:Request , res:Response){
    res.send('Lists of all Products');
};

export function getProductsByid(req:Request , res:Response){
    res.send('Get Products By Id');
};

export function CreateProducts(req:Request , res:Response){
    console.log(req.body)
    res.send('Create Products');
};

export function updateProducts(req:Request , res:Response){
    res.send('Update Products');
};

export function deleteProducts(req:Request , res:Response){
    res.send('Delete Products');
};