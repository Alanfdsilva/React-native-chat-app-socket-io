const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

const activeUsers = new Set();

io.on('connection', (socket) => {
  activeUsers.add(socket.id);

  socket.on('chat message', (message) => {
    message.activeUsers = activeUsers.size,
    io.emit('chat message', message);
  });

  socket.on('disconnect', () => {
    activeUsers.delete(socket.id);
    io.emit('chat message', {
        type: 'loginEvent',
        content: 'Um usuário saiu do chat',
        activeUsers: activeUsers.size,
    });
  });
});

server.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});
