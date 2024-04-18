const express = require('express');
const app = express();

var initRestControllers = require('./input/rest/initRestControllers.js');
var initSocketOn = require('./input/socket/initSocketOn.js');

const server = require('http').createServer(app);
const io = require('socket.io')(server);

initRestControllers(app, express)
initSocketOn(io)

const path = __dirname + '/public/';
app.use(express.static(path));
app.use('/', (req, res) => {
    res.sendFile(path + 'index.html')
});

server.listen(3000);
