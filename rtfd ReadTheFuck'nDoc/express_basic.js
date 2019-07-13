var express=require('express');
var app=express();

app.get('/test',function(req,res,next){
    console.log('Request-type : ',req.method);
    res.send('USER');
});

app.listen(9090);