const express = require("express");
const studentModel =require("../models/studentModel");
const router =express.Router();

router.get("/",(req,res)=>{
 res.send("This is a students router");
}) ;

router.post("/add",(req,res)=>{
    console.log("req",req.body);
    let newStudent = new studentModel({
        firstName:req.body.firstName,
        LastName:req.body.LastName,
        age:req.body.age,
        dob:req.body.dob,
        department:req.body.department,
    })
    newStudent.save()
    .then((response)=>{
        res.send("Student added Sucessfully"+response)
    })
    .catch((error)=>{
        res.send("Something went wrong")
        console.log("error",error)
    })
 }) ;

 router.get("/list",(req,res)=>{
    console.log("req",req.body);
    studentModel.find()
    .then((response)=>{
        res.send("Students listed Sucessfully"+response)
    })
    .catch((error)=>{
        res.send("Something went wrong")
        console.log("error",error)
    })
 }) ;


 router.get("/search-by-firstname",(req,res)=>{ 
    var firstNameQuery = req.query.firstName ;
    console.log("firstNameQuery",firstNameQuery);
   
    studentModel.find({firstName : firstNameQuery}) 
    .then((response)=>{
         
        console.log("response",response)  
        res.send("Student found Sucessfully"+response)
    })
    .catch((error)=>{
        res.send("Something went wrong")
     console.log("error",error)
    })
 }) ;

 router.get("/search-by-id",(req,res)=>{ 
    var idQuery = req.query._id ;
    console.log("req.query",req.query);
    
    studentModel.findById(idQuery) 
    .then((response)=>{
        console.log("response",response)  
        res.send("Student found Sucessfully"+response)
    })
    .catch((error)=>{
        res.send("Something went wrong")
        console.log("error",error)
    })
 }) ;

 router.post("/updateOne",(req,res)=>{ 
    var lastNameQuery = req.query.lastName ;
    console.log("req.query",req.query);
    
    studentModel.findOneAndUpdate({firstName:"Zilla"},{lastname:lastNameQuery}) 
    .then((response)=>{
        console.log("response",response)  
        res.send("Student updated Sucessfully"+response)
    })
    .catch((error)=>{
        res.send("Something went wrong")
        console.log("error",error)
    })
 }) ;
module.exports =router ;

