class GameRoomDomain {
    
    constructor() {
        this.isRevealed = false;
        this.average = 0;
        this.votedCardsInfo = [];
        this.cardsOfRoom = [];
    }

    setListCardsOfRoom(cardsOfRoom) {
        this.cardsOfRoom = cardsOfRoom;
    }

}

module.exports = GameRoomDomain;
