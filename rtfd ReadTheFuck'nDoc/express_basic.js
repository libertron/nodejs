var express=require('express');
var app=express();

var cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

var cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

var cb2 = function (req, res,next) {
  console.log('Hello from C!');
  next();
}

app.get('/users/:id/:name',[cb0,cb1,cb2], function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from D!')
});

app.listen(9090);