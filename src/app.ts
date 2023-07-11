import express,{ Application, Request, Response, NextFunction } from "express";
import passport from "passport"
import dotenv from "dotenv"
dotenv.config()


import rutasEjemplo from "./controllers/routers/rutasEjemplo"
import rutas_auth from "./controllers/routers/authRoutes"
import { appendFile } from "fs";

import miEstrategia from "./config/passport";

//1. Crear un objeto express

const app:Application=express()

//1.1. Emplear las rutas
app.use("/auth", rutas_auth)

//Proteger las rutas siguientes

passport.use(miEstrategia)

app.use(passport.initialize())

app.use("/", passport.authenticate("jwt", {session:false}), rutasEjemplo)

//2. Respuesta cuando el recurso no exista

app.use((req:Request, res:Response, next:NextFunction)=>{
    res.status(404).json({message:"Ups!!!! Lo que pidió no existe"})
})

//3. Respuesta cuando existe un error de servidor

export default app 

