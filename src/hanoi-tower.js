const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let countTurns = 2 ** (disksNumber) - 1
    let time = (countTurns * 3600) / turnsSpeed
    let result = {}
    result.turns = countTurns
    result.seconds = Math.floor(time)
    return result
};