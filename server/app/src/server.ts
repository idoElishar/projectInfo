import express from "express";

const port = 4003;

const app = express();
app.get("/",(req:any,res:any)=>{
    res.send("goo for it !!! ido?!")
})



app.listen(port,()=>{
    console.log("on");
    console.log("hii");
    console.log("bye");    
    console.log("bye");   
    console.log("bye");   
})

