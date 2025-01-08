import dotenv from "dotenv";
import mongoose from "mongoose";
import { database_name } from "./src/utils/constants.js";
import connectionDB from "./src/db/datab.js";

dotenv.config({
    path:'./env'
})
connectionDB()




/*import express from "express"
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