import express from "express";

const port = 4003;

const app = express();
app.get("/",(req:any,res:any)=>{
    res.send("goo the king?!")
})



app.listen(port,()=>{
    console.log("on");
    console.log("hii");
    console.log("bye");    
})