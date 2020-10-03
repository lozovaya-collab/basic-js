const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chainMakerArray: [],
    getLength() {
        return this.chainMakerArray.length;
    },
    addLink(value) {

        if (value === undefined) {
            value = ''
        }
        this.chainMakerArray.push(value)
        return chainMaker
    },
    removeLink(position) {
        if (typeof position != 'number' || !Number.isInteger(position)) {
            this.chainMakerArray = []
            throw new Error();
        }
        let index = position - 1
        if (index > -1) {
            this.chainMakerArray.splice(index, 1);
        } else {
            this.chainMakerArray = []
            throw new Error();
        }
        return chainMaker
    },
    reverseChain() {
        this.chainMakerArray.reverse()
        return chainMaker
    },
    finishChain() {
        let chainString = ''
        let arrayChain = this.chainMakerArray
        let length = arrayChain.length

        for (let i = 0; i < length; i++) {

            if (i !== length - 1) {
                chainString += `( ${arrayChain[i]} )~~`
            } else {
                chainString += `( ${arrayChain[i]} )`
            }
        }
        this.chainMakerArray = []
        return chainString
    }
};

module.exports = chainMaker;