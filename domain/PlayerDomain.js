class PlayerDomain {
    
    constructor(name, idPalyer, idRoom, socket) {
        this.name = name;
        this.idPalyer = idPalyer;
        this.idRoom = idRoom;
        this.step = "no_voted";
        this.vote = "";
        this.client = socket;
    }
}

module.exports = PlayerDomain;
