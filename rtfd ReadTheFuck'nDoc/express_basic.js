var express=require('express');
var app=express();

app.get('/users/:id/:name',function(req,res,next){
  console.log('function 1');
  next();
},function(req,res,next){
  res.send('function 2');
  // next(); not really important here because it's the last function in the stack
});

app.listen(9090);