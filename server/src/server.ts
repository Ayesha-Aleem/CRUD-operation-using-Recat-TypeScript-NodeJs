import express from "express"
import axios from "axios"
import dotenv from "dotenv"
import cors from "cors"
const port=8500

const app=express()
app.use(express.json())
app.use(cors())
dotenv.config();

app.get("/",(req:any,res:any)=>{
    res.send("Hello from CRUD")
})

app.listen(port,()=>{
    console.log(`app is running on ${port}`)
})