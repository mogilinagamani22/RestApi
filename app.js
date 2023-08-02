const express=require("express")
const app=express();
app.get("/sample",(req,res)=>{
    // res.send("hi this is nag")
    res.sendFile(__dirname+ '/index.html')
});
app.get("/",(req,res)=>{
    if(req.query.city)
    {
        res.send(`Hello this is ${req.query.city}`)
    }
    else
    {
        res.send("there is no city");
    }
});
app.get("/:city",(req,res)=>{
    if(req.params.city)
    {
        res.send(`Hello this is city of ${req.params.city}`)
    }
})
app.listen(4000,()=>{
    console.log("server started")
})