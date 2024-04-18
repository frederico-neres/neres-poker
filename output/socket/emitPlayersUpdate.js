var singleton = require('../../singleton/singleton.js');
var GameRoomResponse = require('./response/GameRoomResponse.js');


function emitPlayersUpdate(idRoom) {

    let listPlayerDomain = Array.from(singleton.gameRoom.get(idRoom).values())
    let gameRoomDomain = singleton.gameResults.get(idRoom)
    gameRoomDomain.setListCardsOfRoom(listPlayerDomain)

    let gameRoomResponse = new GameRoomResponse(gameRoomDomain)

    listPlayerDomain.forEach(value => {
        value.client.emit('playersUpdate', gameRoomResponse);
    })

}

module.exports = emitPlayersUpdate;