var convertStringToArray = require('../helpers/convertStringToArray');
module.exports = function lastDigit(n, digit) {
    if (digit < 0) {
        return false;
    }
    
    var digitsArray = convertStringToArray(digit.toString());
    return n === Number(digitsArray[digitsArray.length - 1]);
}