const express = require('express');
const app = express();
const connect = require('./config/dbconfig.js');
require('dotenv').config();

app.use(express.json());

const userRoute = require("./routes/userRoutes.js");

app.use("/api/user", userRoute);



const port = process.env.PORT || 5000;


app.listen(port, async()=>{
    await connect()
    console.log(`Listening on port  ${port}`)
    
})