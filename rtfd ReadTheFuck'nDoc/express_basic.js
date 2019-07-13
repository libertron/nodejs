var express=require('express');
var app=express();

app.use(function(req,res,next){
    console.log('Time:', Date.now());
});

app.listen(9090);