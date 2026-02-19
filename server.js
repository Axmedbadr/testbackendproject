const express= require("express");
require("dotenv").config();
const app = express();
const _PORT = process.env.PORT;

app.use(express.json());

app.listen(_PORT,()=>{
    console.log(`your server is runing at ${_PORT}`);
    
})