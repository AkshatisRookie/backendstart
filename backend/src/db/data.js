import mongoose from "mongoose";
import { database_name } from "../utils/constants.js";
const connectionDB=async()=>{
    try {
        const connectioninstance=await mongoose.connect(`${process.env.mongodb_url}/${database_name})`)
        console.log(`\n mongoDb connected DB HOST: ${connectioninstance.connection.host}`) //done beacuse database production nd all sab alag alag hota to idea rahe where i am
    } catch (error) {
        console.log("Mongoose connection error",error);
}}
export default connectionDB; //boiler plate

