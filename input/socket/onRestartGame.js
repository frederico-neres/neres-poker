var singleton = require('../../singleton/singleton.js');

function onRestartGame(socket, emitPlayersUpdate) {

    socket.on('restartGame', data => {
        let idRoom = data["idRoom"]
        let gameRoom = singleton.gameRoom.get(idRoom)


        if(gameRoom) {
            
            let gameRoomValues = Array.from(gameRoom.values())
            gameRoomValues.forEach((gmRoom)=> {
                gmRoom.step = "no_voted",
                gmRoom.vote = ""
            })

            let gameRoomDomain = singleton.gameResults.get(idRoom)
            gameRoomDomain.isRevealed = false
            gameRoomDomain.average = 0
            gameRoomDomain.votedCardsInfo = []

            emitPlayersUpdate(idRoom)
        }
    });
    
}

module.exports = onRestartGame;
