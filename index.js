const express = require('express');
const app = express();
require('dotenv').config()

app.get('/',(req,res)=>{
    res.send("hello sapna")
})

app.listen(process.env.PORT, ()=> {
    console.log(`Server listening on PORT ${process.env.PORT}`);
});

app.get('/login',(req,res)=>{
    res.send("logged in by sapna")
})

app.get('/insta',(req,res)=>{
    res.send("instaa logeeddd")
})