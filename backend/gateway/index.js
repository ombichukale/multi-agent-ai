import express from "express"
import dotenv from "dotenv"
dotenv.config()
const app=express()

const port=process.env.PORT 
app.get('/',(req,res)=>{
    res.json({message:"gateway started"})
})
app.listen(port,()=>{
    console.log(`gateway started ${port}`)
})