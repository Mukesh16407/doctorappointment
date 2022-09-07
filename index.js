const express = require('express');
const app = express();
const connect = require('./config/dbconfig.js');
require('dotenv').config();

app.use(express.json());

const userRoute = require("./routes/userRoutes.js");
const adminRoute  = require('./routes/adminRoutes');

app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);


const port = process.env.PORT || 5000;


app.listen(port, async()=>{
    await connect()
    console.log(`Listening on port  ${port}`)
    
})