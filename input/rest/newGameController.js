const shortUuid = require('short-uuid');
var GameRoomDomain = require('../../domain/GameRoomDomain.js');
var singleton = require('../../singleton/singleton.js');



function newGameController(app) {

    app.use('/api/newgame', (req, res) => {
        let id = shortUuid.generate();
        singleton.gameRoom.set(id, new Map())

        let gameRoomDomain = new GameRoomDomain()
        singleton.gameResults.set(id, gameRoomDomain)

        res.status(200).json({id: id})
    });
}

module.exports = newGameController;

