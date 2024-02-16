import express from "express"
import mongoose from "./db/index.js"
import Router from "./Routes/index.js"
import cors from "cors"


const app=express()
app.use(express.json())
app.use(cors())
app.use(Router)


app.use("*",(req,res)=>{
    res.status(404).send("Route Not Found")
})


app.listen(3000,()=>{
    console.log("listening at 3000")
})