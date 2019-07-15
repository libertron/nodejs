var express=require('express');
var app=express();

app.get('/users/:id/:name',function(req,res,next){
  console.log(req.params);
  console.log(res);
  next();
});

app.listen(9090);