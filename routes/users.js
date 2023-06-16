var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use("/",(req,res,next)=>{
  req.headers['content-type'] = 'application/json';
 console.log("API call received");
 next();
});
router.get('/', function(req, res, next) {
  res.send('headers' + req.headers['content-type']);
  res.send('respond with a resource');
});
router.get('/search-user-by-Id/:id([0-9]{4})', function(req, res, next) {
  res.send('The user id is'+ req.params.id);
});
router.get('/search-user-by-name/:name([a-zA-Z]{7})', function(req, res, next) {
  res.send('The user name is'+ req.params.name);
});
 router.get('*',(req,res)=>{
   
  var resObj={
    statusCode: 404,
    statusMsg:"URL not found"
   }

   res.send(resObj);
 })
module.exports = router;
