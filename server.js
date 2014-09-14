var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile('index.html',{ root: '/Applications/MAMP/htdocs/node/chat/node-sample' });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});

var index = 0 ;

io.on("connection" ,function(socket){
    console.log("user connected ");
    console.log("user "+ ++index);
    socket.on('disconnect', function(){
        index--;
        console.log('user disconnected');
    });
    socket.on("chat message" , function(msg){
        console.log("message "+ msg);
        io.emit('chat message', msg);
    })
});