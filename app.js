var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var products =require("./routes/products");
var cars =require("./routes/cars");
var location =require("./routes/location");
var mongoose = require("mongoose");
var dbURL = require("./properties").DB_URL;
var studentModel =require("./models/studentModel");
var student =require("./routes/students");
// mongoose.connect(dbURL);

// mongoose.connection.on("connected",()=>{
//   console.log("Connected to Mongodb using miogoose");
// })
async function connectToMongoDB(){
  try {
    // Code to establish MongoDB connection
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
connectToMongoDB()
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
console.log("__dirname",__dirname);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); 
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/p',products); 
app.use("/cars",cars) ;
app.use("/location",location) ;
app.use("/student",student)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
