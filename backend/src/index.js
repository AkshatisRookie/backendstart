import mongoose from "mongoose";
import { database_namer } from "./constants";
import express from "express"
/*
//adding IIFE(immediately invoked function expression)
//global scope me extra info add nahi hoti
//written in a particular way
const app=express()
;(async()=>{
    try{
        await mongoose.connect(`${process.send.mongodb_url}`) //connected with database dont forget to add await
        app.on("error" ,() =>{
            console.log("ERR:",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on port ${process.env.PORT} `);
        })
    }catch(error){
        console.log("Error",error)
        throw error
    }
})()
*/