const express = require('express');
const app = express();
const connect = require('./config/dbconfig.js');
require('dotenv').config();

app.use(express.json());

const userRoute = require("./routes/userRoutes.js");
const adminRoute  = require('./routes/adminRoutes');
const doctorRoute = require('./routes/doctorRoutes');


app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use('/api/doctor',doctorRoute)

const port = process.env.PORT || 5000;


app.listen(port, async()=>{
    await connect()
    console.log(`Listening on port  ${port}`)
    
})