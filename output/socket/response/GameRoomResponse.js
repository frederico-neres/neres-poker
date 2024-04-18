
class GameRoomResponse {

    constructor(gameRoomDomain) {
        this.isRevealed = gameRoomDomain.isRevealed;
        this.average = gameRoomDomain.average;
        this.votedCardsInfo = gameRoomDomain.votedCardsInfo;
        this.cardsOfRoom = gameRoomDomain.cardsOfRoom.map(e=> {
            return  new PlayerResponse(e.name, e.idPalyer, e.idRoom, e.step, e.vote)
        });
     
    }
}

class PlayerResponse {
    constructor(name, idPalyer, idRoom, step, vote) {
        this.name = name;
        this.idPalyer = idPalyer;
        this.idRoom = idRoom;
        this.step = step;
        this.vote = vote;
    }
}

module.exports = GameRoomResponse ;
