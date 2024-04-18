var singleton = require('../../singleton/singleton.js');

function onCardReveal(socket, emitPlayersUpdate) {

    socket.on('cardReveal', data => {
        let idRoom = data["idRoom"]

        let gameRoom = singleton.gameRoom.get(idRoom)
        if(gameRoom) {
            let gameRoomDomain = singleton.gameResults.get(idRoom)
            gameRoomDomain.isRevealed = true

            let gameRoomValues = Array.from(gameRoom.values())
            let votedCards = gameRoomValues.filter((e)=> { return e.step == "voted"})

            let vcardMap = new Map()
            votedCards.forEach(vcard=> {
                vcard.step = "revealed"
                let v = vcardMap.get(vcard.vote) ?? {quantity: 0}

                let newQuantity = v.quantity + 1
                vcardMap.set(vcard.vote, {
                    number: vcard.vote,
                    quantity: newQuantity,
                    quantityLabel: `${newQuantity} votos`

                })
            })


            let listNumber = Array.from(vcardMap.values())

            let quantitySum = listNumber.reduce(function (sum, value) {
                let number = parseInt(value.number)
                if(number)
                    return parseInt(sum) + parseInt(value.quantity) ;
                else
                    return sum
            }, 0) 

            let average = listNumber.reduce(function (sum, value) {
                let number = parseInt(value.number)
                if(number)
                    return parseInt(sum) + ( number * value.quantity) ;
                else 
                    return sum
            }, 0) / quantitySum;

            gameRoomDomain.average = average?average.toFixed(1):0
            gameRoomDomain.votedCardsInfo = Array.from(vcardMap.values()).sort()
            emitPlayersUpdate(idRoom)
        }
    });

}

module.exports = onCardReveal;
