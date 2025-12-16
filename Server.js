import express from "express";
import sum from "./sum.js";
const PORT=8000;
const app=express();
app.listen(PORT,()=>{
    console.log(`The Server is running on the port ${PORT} here we go`);
})


app.get("/home",async (req,res)=>{
    res.json({
        "msg":"Hello I am root!"
    })
})

app.get("/getSum/:a/:b",async(req,res)=>{
    const {a,b}=req.params;
    res.json({
        ans:`sum of the two numbers ${a} , ${b} is : ${ sum(parseInt(a),parseInt(b))}`
    })






})