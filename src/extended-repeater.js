const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

    if (options !== undefined) { // если есть обьект
        let additionSeparator
        let separator = String(options.separator)
        if (separator === 'undefined') {
            separator = '+'
        }
        if (options.additionSeparator !== undefined) {
            additionSeparator = String(options.additionSeparator)
        } else {
            additionSeparator = '|'
        }
        let repeatTimes = options.repeatTimes
        let addition = String(options.addition)
        let additionRepeatTimes = options.additionRepeatTimes
        let strAddition
        let strRepeater = str
            // если обьект полный
        if (addition !== 'undefined') {
            console.log("here");
            strAddition = addition
            for (let i = 1; i < additionRepeatTimes; i++) {
                strAddition += additionSeparator + addition
            }

            strRepeater += strAddition
            let strNew = strRepeater

            for (let i = 1; i < repeatTimes; i++) {
                strNew += separator + strRepeater

            }
            strRepeater = strNew

        } else if (addition == 'undefined') { // если нет addition
            let strNew = strRepeater
            if (repeatTimes !== undefined) {
                for (let i = 1; i < repeatTimes; i++) {
                    strNew += separator + strRepeater
                }

            }
            strRepeater = strNew
        }
        return strRepeater
    } else if (str !== undefined) {
        return String(str)
    } else {
        return 'THROWN'
    }


};