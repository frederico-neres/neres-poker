var singleton = require('../../singleton/singleton.js');
var PlayerDomain = require('../../domain/PlayerDomain.js');
var createNewGame = require('../../usecase/createNewGame.js');


function onInPlayer(socket, emitPlayersUpdate) {

    socket.on('inPlayer', data => {
        let idPalyer = data["idPalyer"]
        var idRoom = data["idRoom"]
        let name = data["name"]

        var gameRoom = singleton.gameRoom.get(idRoom)
        if(!gameRoom) {
            createNewGame(idRoom)
            gameRoom = singleton.gameRoom.get(idRoom)
        }

        let playerDomain = new PlayerDomain(name, idPalyer, idRoom, socket)
        gameRoom.set(idPalyer, playerDomain)

        singleton.clientsRoomsRelationship.set(idPalyer, {
            idRoom: idRoom
        })

        emitPlayersUpdate(idRoom)
    });
}

module.exports = onInPlayer;
