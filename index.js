require('dotenv').config()
const express =require('express');
const app= express();
const port =4000;

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get("/instagram",(req,res)=>{
  res.send("imnotnoor")
})

app.get("/login",(req,res)=>{
    res.send("<h1>please login at chai and code</h1>")
})

app.get("/youtube/chaiaurcode",(req,res)=>{
res.send("<h2>Please visit chai aur code.</h2>")
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})