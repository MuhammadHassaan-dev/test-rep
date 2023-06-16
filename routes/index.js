var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Muhammad  Hassaan' , subtitle: 'Welcome to the developing world' });
});
router.get('/tutorials', function(req, res, next) {
  res.render('index', { title: 'Programing Tutorials' , subtitle: 'Welcome to the developing world of tutorials' });
});

module.exports = router;
