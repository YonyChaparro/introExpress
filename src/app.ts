import express,{ Application, Request, Response, NextFunction } from "express";

import rutasEjemplo from "./controllers/routers/rutasEjemplo"
//1. Crear un objeto express

const app:Application=express()

//1.1. Emplear las rutas

app.use("/", rutasEjemplo)

//2. Respuesta cuando el recurso no exista

app.use((req:Request, res:Response, next:NextFunction)=>{
    res.status(404).json({message:"Ups!!!! Lo que pidió no existe"})
})

//3. Respuesta cuando existe un error de servidor

export default app 

