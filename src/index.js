
// require('dotenv').config({path:'./env'})   //it degrades consistency of our code
import dotenv from "dotenv"; // ye aise chalega nahi islo config karna padega
// we can use import dotenv by an experimental feature--> go to package.json--> script --> "dev":"nodemon -r dotenv/cponfig --experimental-json-modules"

import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()






/*
;(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERROR: ", error);
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }
    catch(error){
        console.log("ERROR: ", error)
        throw error
    }
})()
    */