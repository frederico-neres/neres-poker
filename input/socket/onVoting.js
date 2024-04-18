var singleton = require('../../singleton/singleton.js');

function onVoting(socket, emitPlayersUpdate) {
    socket.on('voting', data => {
        let voteValue = data["vote"]
        let idPalyer = data["idPalyer"]
        let idRoom = data["idRoom"]

        let gameRoom = singleton.gameRoom.get(idRoom)

        if(gameRoom) {
            gameRoom.get(idPalyer).vote = voteValue
            gameRoom.get(idPalyer).step = "voted"

            emitPlayersUpdate(idRoom)
        }
    });
}

module.exports = onVoting;
