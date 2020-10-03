const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(bool) {
        this.bool = bool
    }
    encrypt(word, key) {

        if (word === undefined || key === undefined) {
            return 'TROWN'
        } else {

            let wordToEncrypt = word.toUpperCase()
            let keyToEncrypt = key.toUpperCase()
            let wordCodes = []
            let keyCodes = []
            let codesForEncrypt = []
            let arrayWordAfterEncrypt = []
            let wordAfterEncrypt
            let code_A = 'A'.charCodeAt(0)

            let n = 26
            let j = 0
            for (let i = 0; i < wordToEncrypt.length; i++) {

                if (wordToEncrypt[i] >= 'A' && wordToEncrypt[i] <= 'Z') {
                    let code = wordToEncrypt.charCodeAt(i) - code_A
                    wordCodes.push(code)
                    keyCodes.push(keyToEncrypt[j])
                    if (j < keyToEncrypt.length - 1) {
                        j += 1
                    } else {
                        j = 0
                    }
                } else {
                    keyCodes.push(wordToEncrypt[i])
                    wordCodes.push(wordToEncrypt[i])
                }


            }

            for (let j = 0; j < keyCodes.length; j++) {
                if (keyCodes[j] >= 'A' && keyCodes[j] <= 'Z') {
                    let codeCharOfKey = keyCodes[j].charCodeAt(0) - code_A
                    keyCodes[j] = codeCharOfKey
                }
            }

            for (let itr = 0; itr < wordCodes.length; itr++) {
                if (wordCodes[itr] <= n && (typeof wordCodes[itr] == 'number')) {
                    let value = (wordCodes[itr] + keyCodes[itr])

                    if (value < n) {
                        codesForEncrypt.push(value)
                    } else {
                        codesForEncrypt.push(value - n)
                    }
                } else {
                    codesForEncrypt.push(wordCodes[itr])
                }

            }

            for (let index = 0; index < codesForEncrypt.length; index++) {
                if (typeof codesForEncrypt[index] == 'number') {
                    let code = codesForEncrypt[index] + code_A
                    arrayWordAfterEncrypt.push(String.fromCharCode(code))
                } else {
                    arrayWordAfterEncrypt.push(codesForEncrypt[index])
                }
            }
            if (this.bool === false) {
                wordAfterEncrypt = arrayWordAfterEncrypt.reverse().join('').replace(/\s+/g, ' ').trim()
                return wordAfterEncrypt
            } else {
                wordAfterEncrypt = arrayWordAfterEncrypt.join('').replace(/\s+/g, ' ').trim()
                return wordAfterEncrypt
            }
        }


    }

    decrypt(word, key) {

        let wordToEncrypt = word.toUpperCase()
        let keyToEncrypt = key.toUpperCase()
        let wordCodes = []
        let keyCodes = []
        let codesForEncrypt = []
        let arrayWordAfterEncrypt = []
        let wordAfterEncrypt
        let code_A = 'A'.charCodeAt(0)

        let n = 26
        let j = 0
        for (let i = 0; i < wordToEncrypt.length; i++) {

            if (wordToEncrypt[i] >= 'A' && wordToEncrypt[i] <= 'Z') {
                let code = wordToEncrypt.charCodeAt(i) - code_A
                wordCodes.push(code)
                keyCodes.push(keyToEncrypt[j])
                if (j < keyToEncrypt.length - 1) {
                    j += 1
                } else {
                    j = 0
                }
            } else {
                keyCodes.push(String(wordToEncrypt[i]))
                wordCodes.push(wordToEncrypt[i])
            }


        }

        for (let j = 0; j < keyCodes.length; j++) {
            if (keyCodes[j] >= 'A' && keyCodes[j] <= 'Z') {
                let codeCharOfKey = keyCodes[j].charCodeAt(0) - code_A
                keyCodes[j] = codeCharOfKey
            }
        }

        for (let itr = 0; itr < wordCodes.length; itr++) {
            if (wordCodes[itr] <= n && (typeof wordCodes[itr] === 'number')) {
                let value = (wordCodes[itr] - keyCodes[itr])
                if (value >= 0) {
                    codesForEncrypt.push(value)
                } else {
                    codesForEncrypt.push(value + n)
                }
            } else {
                codesForEncrypt.push(wordCodes[itr])
            }

        }

        for (let index = 0; index < codesForEncrypt.length; index++) {
            if (typeof codesForEncrypt[index] === 'number') {
                let code = codesForEncrypt[index] + code_A
                arrayWordAfterEncrypt.push(String.fromCharCode(code))
            } else {
                arrayWordAfterEncrypt.push(codesForEncrypt[index])
            }
        }

        if (this.bool === false) {
            wordAfterEncrypt = arrayWordAfterEncrypt.reverse().join('').replace(/\s+/g, ' ').trim()
            return wordAfterEncrypt
        } else {
            wordAfterEncrypt = arrayWordAfterEncrypt.join('').replace(/\s+/g, ' ').trim()
            return wordAfterEncrypt
        }

    }
}

module.exports = VigenereCipheringMachine;