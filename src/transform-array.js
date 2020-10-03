const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

    if (!Array.isArray(arr)) {
        throw new Error();
    }
    let duplicateArray = arr
    let transformArray = []
    for (let i = 0; i < duplicateArray.length; i++) {
        if (duplicateArray[i] === '--discard-next') {
            i += 1
            continue
        } else if (duplicateArray[i + 1] === '--discard-prev' || duplicateArray[i] === '--discard-prev') {
            if (duplicateArray[i] === '--discard-prev') {
                continue
            } else {
                i += 1
                continue
            }
        } else if (duplicateArray[i] === '--double-next') {
            if (i === duplicateArray.length - 1) break
            let valueNext = duplicateArray[i + 1]
            transformArray.push(valueNext)
            continue
        } else if (duplicateArray[i + 1] === '--double-prev') {

            let valuePrev = duplicateArray[i]
            transformArray.push(valuePrev)
            transformArray.push(valuePrev)
            i += 1
            continue
        } else if (duplicateArray[i] === '--double-prev') {

            continue
        } else {
            if (duplicateArray[i] !== undefined) transformArray.push(duplicateArray[i])
        }


    }
    return transformArray
};