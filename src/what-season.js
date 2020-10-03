const CustomError = require("../extensions/custom-error");

module.exports =
    function getSeason(date) {

        if (date === undefined) {
            return 'Unable to determine the time of year!'
        } else if (!date.valueOf()) {
            throw new Error();
        }
        let month = date.getMonth()
        let season
        if (month === 11 || month >= 0 && month <= 1) {
            season = 'winter'
        } else if (month >= 2 && month <= 4) {
            season = 'spring'
        } else if (month >= 5 && month <= 7) {
            season = 'summer'
        } else {
            season = 'autumn'
        }

        return season
    };