const CustomError = require("../extensions/custom-error");


module.exports = function countCats( /* matrix */ ) {
    let matrix = arguments[0]
    let count = 0
    for (let i = 0; i < matrix.length; i++) {
        let numberOfCats = checkArrayOnCats(matrix[i])
        count = count + numberOfCats
    }

    return count

};

function checkArrayOnCats(array) {
    let arr = array
    let numberOfCats = 0
    for (let value of arr) {
        if (value === '^^') {
            numberOfCats += 1
        }
    }
    return numberOfCats
}