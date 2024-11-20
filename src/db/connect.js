const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/work")
    .then(()=>{console.log("connection Successful")})
    .catch((err)=>{console.log(err)})