var express=require('express');
var app=express();

app.get('/users/:id/:name',function(req,res,next){
  res.send('function 1');
  next();
},function(req,res,next){
  res.send('function 2');
  next();
});

app.listen(9090);