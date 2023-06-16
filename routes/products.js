const express =require("express");
const router =express.Router();

router.get("/",(req,res)=>{
   res.send("this is a product router");
}) ;

router.get("/product-details",(req,res)=>{
   res.send("this is product details");
}) ;
  
module.exports = router ;