const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const socketIo = require('socket.io');

const User = require('./models/user');

const app = express();
app.use(express.static('client/build'));

mongoose.connect(process.env.YKJS_2_DB);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const server = app.listen(process.env.PORT || 3001);
const io = socketIo(server);

io.on('connection', (socket) => {
  socket.on('CHANGE_MSG', (msg) => {
    console.log(msg);
    io.emit('CHANGE_MSG', msg);
  });
});
