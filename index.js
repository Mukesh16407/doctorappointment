const express = require('express');
const mongoose = require('mongoose');

const app = express();

require('dotenv').config();

const connect = ()=>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log('connect to DB')
    }).catch((err)=>{
        throw err
    })
}

const port = process.env.PORT || 5000;


app.listen(port, async()=>{
    await connect()
    console.log(`Listening on port  ${port}`)
    
})