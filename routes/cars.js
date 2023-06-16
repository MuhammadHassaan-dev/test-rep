const express = require("express");

const router =express.Router();

router.get("/",(req,res)=>{
   res.send("this is cars router");
}) ;

router.get("/toyata",(req,res)=>{
    res.send("this is toyota cars router");
 }) ;

 router.get("/honda",(req,res)=>{
    res.send("this is honda cars router");
 }) ;

 module.exports =router;