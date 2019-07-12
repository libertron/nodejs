var EventEmitter= require('events').EventEmitter;
var game=new EventEmitter();
game.on('gameover',function(message){
	console.log(message);
});

game.emit('gameover','You loose!');