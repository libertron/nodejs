var express=require('express');
var app=express();

//to solve CORS errors
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


var logger = function (req, res, next) {
  console.log('LOGGED')
  next();
}

app.use(logger);

app.get('/',function(req,res){
  res.send('Hello');
});

app.listen(9090);