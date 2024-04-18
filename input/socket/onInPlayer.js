var singleton = require('../../singleton/singleton.js');
var PlayerDomain = require('../../domain/PlayerDomain.js');

function onInPlayer(socket, emitPlayersUpdate) {

    socket.on('inPlayer', data => {
        let idPalyer = data["idPalyer"]
        let idRoom = data["idRoom"]
        let name = data["name"]

        let gameRoom = singleton.gameRoom.get(idRoom)
        if(gameRoom) {
            let playerDomain = new PlayerDomain(name, idPalyer, idRoom, socket)
            gameRoom.set(idPalyer, playerDomain)

            singleton.clientsRoomsRelationship.set(idPalyer, {
                idRoom: idRoom
            })

            emitPlayersUpdate(idRoom)

        } else {
            socket.emit('nonExistentRoom', idRoom);
        }

    });
}

module.exports = onInPlayer;
