var convertStringToArray = require('../helpers/convertStringToArray')
module.exports = function stringE(givenString) {
    var stringArray = convertStringToArray(givenString).filter(function(stringChar) {
        return stringChar === 'e' || stringChar === 'E'
    });

    return stringArray.length >= 1 && stringArray.length <= 3;
}