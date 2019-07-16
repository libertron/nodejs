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
};

var requestTime=function(req,res,next){
  req.requestTime=Date.now;
  next();
};

app.use(logger);
app.use(requestTime);

app.get('/',function(req,res){
  var htmlResponse='hello! <br/> you request that page at: ';
  htmlResponse+='<smal>'+req.requestTime+'</smal>';
  res.send(htmlResponse);
});

app.get('/user/:id',function(req,res,next){
  if(req.params.id==='0') next('route')
  else
    next();
},function(req,res,next){
  res.send('Case that req.id >0');
});

app.get('/user/:id',function(req,res,next){
  res.send('In that handler function req.id might equal to 0. Result =>'+req.params.id);
})

app.listen(9090);