const shortUuid = require('short-uuid');
var GameRoomDomain = require('../domain/GameRoomDomain.js');
var singleton = require('../singleton/singleton.js');

function createNewGame(id = null) {
    let idRoom = id ? id : shortUuid.generate();
    singleton.gameRoom.set(idRoom, new Map())

    let gameRoomDomain = new GameRoomDomain()
    singleton.gameResults.set(idRoom, gameRoomDomain)

    return idRoom;
}

module.exports = createNewGame;
