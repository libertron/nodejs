var express=require('express');
var app=express();

app.get('/user/:id', function (req, res, next) {
    console.log('ID:', req.params.id)
    next()
  }, function (req, res, next) {
    res.send('Hello World')
});

app.listen(9090);