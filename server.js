var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
    res.sendFile('index.html',{ root: '/Applications/MAMP/htdocs/node/chat/node-sample' });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});