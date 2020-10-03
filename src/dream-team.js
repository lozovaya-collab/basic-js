const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {


    if (!Array.isArray(array)) {
        return false;
    }
    if (typeof array == 'object' && array !== undefined) {


        let arrayOfNames = array
        let abbreviation = []
        for (let name of arrayOfNames) {

            if (typeof name === 'string') {
                let newName = name.replace(/\s+/g, ' ').trim()
                let firstLetter = newName[0].toUpperCase()
                abbreviation.push(firstLetter)
            }
        }
        abbreviation.sort();
        let nameOfTeam = abbreviation.join('')
        return nameOfTeam
    }

    return false

};