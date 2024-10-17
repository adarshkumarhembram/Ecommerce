const express = require('express')


const app = express();

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.json({msg:"this is example"})
})

app.listen(PORT,()=>{
    console.log("server is running");
    
})