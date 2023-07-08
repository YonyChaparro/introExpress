import express, { Router, Request, Response } from "express";

const router : Router = Router()

//1. Definir rutas

//Usualmente las rutas corresponden a acciones CRUD

router.get(
    "/mensaje",
    (req:Request,  res:Response)=>{
        res.send("Hoy es un día fabuloso")
    }
)


router.get(
    "/despedida",
    (req:Request,  res:Response)=>{
        res.send("chaíto!!")
    }
)
export default router