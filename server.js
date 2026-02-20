const express= require("express");
require("dotenv").config();
const connectDB = require("./config/db")
const app = express();
const cors = require("cors");
const authrouter= require("./routes/authRoutes");
const professionalrouter = require ("./routes/professionalsRoutes");




const _PORT = process.env.PORT;
connectDB();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authrouter);
app.use('/api/professionals',professionalrouter );

app.listen(_PORT,()=>{
    console.log(`your server is runing at ${_PORT}`);
    
})