var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);

var connectCounter=0;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get('/voter', function(req, res) {
    res.sendFile(__dirname + "/voter.html");
});

io.on('connection', function(socket) {

    socket.on('gather',function(msg) {
    	io.emit('gather');
    });

    socket.on('my score', function(msg) {
    	io.emit('push results',msg);
    	console.log("received score of "+msg);
    });
        
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});
