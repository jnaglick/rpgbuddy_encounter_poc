import socketClient from 'socket.io-client';

const socket = socketClient({
    transports: ['websocket']
});
