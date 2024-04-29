var createNewGame = require('../../usecase/createNewGame.js');

function newGameController(app) {

    app.use('/api/newgame', (req, res) => {
        let id = createNewGame()
        res.status(200).json({id: id})
    });
}

module.exports = newGameController;

