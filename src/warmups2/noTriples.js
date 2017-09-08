module.exports = function noTriples(givenArray) {
    var sanitisedArray = givenArray.map(function(givenArrayItem) {
        if (typeof givenArrayItem !== 'number') {
            return Number(givenArrayItem);
        }
        return givenArrayItem;
    });
    var indexOfDigit = sanitisedArray.indexOf(1);
    return !(sanitisedArray[indexOfDigit] === 1 && sanitisedArray[indexOfDigit + 1] === 1 && sanitisedArray[indexOfDigit + 2] === 1);
}