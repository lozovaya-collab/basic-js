const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let number = 1
        let arrayOfNumbers = []
        for (let value of arr) {

            if (Array.isArray(value)) {
                arrayOfNumbers.push(this.calculateDepth(value))
            }
        }

        if (arrayOfNumbers.length !== 0) {
            number += Math.max.apply(Math, arrayOfNumbers)
        }
        return number
    }
};