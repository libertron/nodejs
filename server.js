var http = require('http');
var url=require('url');
var querystring=require('querystring');
var server = http.createServer(function(req, res) {
var page=url.parse(req.url).pathname;
var params=querystring.parse(url.parse(req.url).query);
var msg=('firstname' in params && 'lastname' in params)? `hello ${params['firstname']} ${params['lastname']}`:
' you still have to give your name';

if(page=='/'){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(
        '<!DOCTYPE html>'+
        '<html>'+
            '<head>'+
                "<meta charset='utf-8'>"+
                '<title>HOME</title>'
            +'</head>'+
            '<body>'+
                '<center><h1>WELCOME TO NODE JS DOCUMENTATION </h1></center>'+
                '<center><p> Node js is a server-side framework to develop back-end application</p></center>'+
                '<center><p>'+msg+'</p></center>'
            +'</body>'
        +'</html>'
    );
}else if(page=='/myfolder/page.html'){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(
        '<!DOCTYPE html>'+
        '<html>'+
            '<head>'+
                "<meta charset='utf-8'>"+
                '<title>Page</title>'
            +'</head>'+
            '<body>'+
                '<center><h1>HERE YOU ARE IN PAGE << /myfolder/page >> </h1></center>'+
                '<center><p> This page is reserved to test an assertion</p></center>'+
                '<center><p>'+msg+'</p></center>'
            +'</body>'
        +'</html>'
    );
}else{
    res.writeHead(404,{'Content-Type':'text/html'});
    res.write(
        '<!DOCTYPE html>'+
        '<html>'+
            '<head>'+
                "<meta charset='utf-8'>"+
                '<title>404</title>'
            +'</head>'+
            '<body>'+
                '<center><h1> OOPS ... (404)</h1></center>'+
                '<center><p> It\'s seems that we don\'t have the page that you\'ve asked for.</p></center>'
            +'</body>'
        +'</html>'
    );
}
res.end();
});

server.on('close',function(){
    console.log("Good bye!");

});
server.listen(8080);
// server.close();