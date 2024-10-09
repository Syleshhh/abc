const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const UsersModel=require("../models/users")

const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/users");

app.post("/register",(req,res)=>{
    UsersModel.createUser(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
    // console.log(req.body);
})

app.listen(3333,()=>{
    console.log("server is running......")
})