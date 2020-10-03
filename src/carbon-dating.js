const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
module.exports = function dateSample(str) {
    if (typeof str === String) {
        let sampleActivity = str
        if (str === undefined) return false
        if (/^-{0,1}\d+$/.test(sampleActivity) || /^\d+\.\d+$/.test(sampleActivity)) {
            let sampleActivityToNumber = Number(str)
            if (sampleActivityToNumber <= 0) return false
            let radioactiveDecay = 0.693 / HALF_LIFE_PERIOD
            let period = Math.log2(MODERN_ACTIVITY / sampleActivityToNumber) / radioactiveDecay

            return Math.ceil(period)
        }
        return false
    }

    return false
};