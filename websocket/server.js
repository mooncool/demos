/**
 * WebSocket 服务器端
 *
 * @author Moon
 */

var port = 12345;
const server = require('socket.io')(port).of('/chat');

console.log('Server is listening on port:', port);

server.on('connection', function(clientHandler) {
    console.log('Someone connect.');

    clientHandler.on('disconnect', function() {
        console.log('Someone disconnect.');
    });

    clientHandler.on('send-msg', function(data) {
        console.log('Data:', data);

        server.emit('data-change', data);
    });
});
