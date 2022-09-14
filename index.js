const express = require('express');
const app = express();
const connect = require('./config/dbconfig.js');
require('dotenv').config();
const path = require("path");

app.use(express.json());

const userRoute = require("./routes/userRoutes.js");
const adminRoute  = require('./routes/adminRoutes');
const doctorRoute = require('./routes/doctorRoutes');


app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use('/api/doctor',doctorRoute);


const __dirname1 = path.resolve()

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname1,"client/build")));
  
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "client","build","index.html"));
  });
}else{
  app.get("/", (req, res) => {
    res.send("Hello World!");
  })
}

const port = process.env.PORT || 5000;


app.listen(port, async()=>{
    await connect()
    console.log(`Listening on port  ${port}`)
    
})