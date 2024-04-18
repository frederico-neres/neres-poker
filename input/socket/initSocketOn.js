var onRestartGame = require('./onRestartGame.js');
var onDisconnect = require('./onDisconnect.js');
var onCardReveal = require('./onCardReveal.js');
var onInPlayer = require('./onInPlayer.js');
var onVoting = require('./onVoting.js');

var emitPlayersUpdate = require('../../output/socket/emitPlayersUpdate.js');


function initSocketOn(io) {
    io.on('connection', socket => {

        socket.emit('newGameId', socket.id);

        onDisconnect(socket, emitPlayersUpdate)
        onInPlayer(socket, emitPlayersUpdate)
        onVoting(socket, emitPlayersUpdate)
        onCardReveal(socket, emitPlayersUpdate)
        onRestartGame(socket, emitPlayersUpdate)
        
    });
}

module.exports = initSocketOn;
