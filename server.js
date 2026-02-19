const express= require("express");
require("dotenv").config();
const connectDB = require("./config/db")
const app = express();

connectDB()
const _PORT = process.env.PORT;

app.use(express.json());

app.listen(_PORT,()=>{
    console.log(`your server is runing at ${_PORT}`);
    
})