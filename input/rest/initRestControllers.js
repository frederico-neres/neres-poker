var newGameController = require('./newGameController.js');

function initRestControllers(app, express) {
    newGameController(app)
}

module.exports = initRestControllers;