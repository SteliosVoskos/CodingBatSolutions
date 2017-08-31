'use strict'
module.exports = function convertStringToArray(givenString) {
    if (givenString === '') {
        return [];
    }

    if (typeof givenString === 'number') {
        return Array.prototype.map.call(givenString.toString(), item => item);
    }

    return Array.prototype.map.call(givenString, item => item);
}