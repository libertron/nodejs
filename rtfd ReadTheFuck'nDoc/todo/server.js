const express=require('express');
const redis=require('redis')
const session=require('express-session');
const redisStore =require('connect-redis')(session);
const path=require('path');
const uuidv4 = require('uuid/v4');
const router=express.Router();
const client =redis.createClient();
const bodyParser=require('body-parser');

// Init app
const app=express();

app.set('views',path.join(__dirname,'views'));
// Set public path
app.use(express.static(path.join(__dirname, 'public')));

// Mounting the session middleware
app.use(session({
    secret:'mysession',
    store: new redisStore({host:'localhost', port: 6379, client: client, ttl :260}),
    saveUninitialized:false,
    resave:false
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','pug');

router.get('/',function(req,res){
    if(typeof(req.session.tasks)==='undefined')
        req.session.tasks=tasks;        
    
    res.render('index',{
        tasks:req.session.tasks
    })
});

router.post('/save',function(req,res){
    let text =req.session.text=req.body.text;
    if(text){
        req.session.tasks[uuidv4()]={
            deleted:false,
            text:text
        }
    }    
    res.send('200');
});

router.post('/delete',function(req,res){
    let id =req.body.data_id;
    if(id){
        delete req.session.tasks[id];
    }
    res.send('200');
});

app.use('/',router);
app.listen(3000);