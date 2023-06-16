const express = require("express"); 

const router =express.Router();

router.get("/:loc",(req,res)=>{
  res.send("this is location"+req.params.loc);
}) ;

router.get("/city/:city/:area",(req,res)=>{
    res.send("this is location and city is"+req.params.city+" area is "+req.params.area) ;
}) ;

module.exports = router ;