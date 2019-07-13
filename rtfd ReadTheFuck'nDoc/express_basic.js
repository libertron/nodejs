var express=require('express');
var app=express();

app.use('/user/:id',function(req,res,next){
    console.log('Request URL : ',req.originalUrl);
    next();
},function(req,res,next){
    console.log('Request Type : ',req.method);
    next();
});

app.listen(9090);