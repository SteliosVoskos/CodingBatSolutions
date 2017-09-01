var convertStringToArray = require('../helpers/convertStringToArray');

module.exports = function(givenString, n) {
    if (givenString === '' || n === 0) {
        return '';
    }
    if (n === 1) {
        return givenString.charAt(0);
    }
    return convertStringToArray(givenString).filter(function(stringElement, index) {
        return index % n === 0;
    }).toString().replace(/,/g, '');    
}