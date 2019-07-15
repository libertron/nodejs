var express=require('express');
var app=express();

//to solve CORS errors
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


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

app.route('/users/:id/:name').get([cb0,cb1,cb2], function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from D!')
}).post(function(req,res){
  res.type('json');
  res.send({name : req.params.name});
});

app.listen(9090);