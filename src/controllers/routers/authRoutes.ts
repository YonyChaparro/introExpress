import express, { Router, Request, Response } from "express";
import jwt from "jsonwebtoken"
const router : Router = Router()

//1. Definir rutas

router.get(
    "/login", 
    (req:Request, res:Response)=>{

        //TO DO: Obtener esto desde la DB
        //Nunca colocar datos sensibles en importantes en un JWT

        const payload={
            id:"user_id",
            username:"Yony",
            password:"mypassword"
        }

        const options={
            //expiresIn:"2h"
        }
  
        const secretKey=process.env.SECRET_KEY

        if(typeof secretKey=="string"){
            const token=jwt.sign(payload, secretKey, options)

            res.json({token})
        }
    })

export default router