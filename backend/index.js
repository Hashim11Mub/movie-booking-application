const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()

mongoose.connect("mongodb+srv://hashnav:Abc123@november-cluster.gj0olk4.mongodb.net/")
.then(()=>app.listen(5000, () => 
    console.log("Connected to the server + port")
  )
)
.catch(e=>console.log(e));




