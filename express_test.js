var express=require('express');
var app=express();

app.get('/',function(req,res){
	res.setHeader('Content-Type','text/plain');
	res.end('You\'re in reception');
});

app.get('/count/:number',function(req,res){
	var names=['Robert','Jack','David'];
	res.render('page.ejs',{counter:req.params.number,names:names});
});

app.get('/:app/:work',function(req,res){
	res.setHeader('Content-Type','text/plain');
	res.end('You are in the work space linked as => '+req.params.app+'/'+req.params.work);
});
app.get('/floor/:floornum/bedroom',function(req,res){
	res.render('bedroom.ejs',{floor:req.params.floornum});
})
app.use(function(req,res,next){
	res.setHeader('Content-Type','text/plain');
	res.send(404,'Page not found!');
});



app.listen(8080);