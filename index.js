const express = require("express");
const app = express() 
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path")
//const register = require('../ecommerce_app/user/register')
//app.use(express.static(path.join(__dirname,"../build")))
app.use(express.json())
dotenv.config();
require('./index_routes')(app)
mongoose.connect(process.env.MONGO_URL).then(()=>{
   console.log("Database Connected Successfully");
}
).
catch((err)=>{
    console.log(err);
})

//app.use('/api',register);
app.listen(5000,()=>{
    
    console.log("Hello world");
})