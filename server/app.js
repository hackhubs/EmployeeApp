const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
require('./Employee')
app.use(bodyParser.json())

const Employee = mongoose.model("employee")


app.get('/',(req,res)=>{
    res.send("welcome to my world")
})
//connect to mongoDb
const mongoUri = "mongodb+srv://abhav:ab8988143226@employeeapp.v51d0.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoUri,{useNewUrlParser: true , useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected .. to abhav database'))
    .catch(err => console.log(err));

app.post('/send',(req,res)=>{
    console.log(req.body)
    res.send("posted")
})
app.listen(3000,()=>{
    console.log("server is running")
})