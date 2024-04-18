var singleton = require('../../singleton/singleton.js');

function onDisconnect(socket, emitPlayersUpdate) {
    socket.on("disconnect", () => {
        console.log("disconnect: ", socket.id);
        let client = singleton.clientsRoomsRelationship.get(socket.id)
        if(client) {
            let idRoom = client.idRoom
            singleton.gameRoom.get(idRoom).delete(socket.id)
            singleton.clientsRoomsRelationship.delete(socket.id)

            emitPlayersUpdate(idRoom)
        }

    });
}

module.exports = onDisconnect;
