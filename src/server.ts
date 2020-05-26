import express from 'express';
import http from 'http';
import socketio from 'socket.io';

const app = express();
app.use(express.static('dist/static'));

const httpServer = http.createServer(app);
httpServer.listen(4000, function() {
    console.log('listening on *:4k');
});

const socketServer = socketio(httpServer, { 
    serveClient: false, 
    transports: ['websocket'] 
});
socketServer.on('connection', function(socket) {
    console.log('someone connected');
});
