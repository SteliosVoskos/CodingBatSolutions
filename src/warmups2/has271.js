module.exports = function has271(givenArray) {
    var sanitisedArray = givenArray.map(function(givenArrayItem) {
        if (typeof givenArrayItem !== 'number') {
            return Number(givenArrayItem);
        }
        return givenArrayItem;
    });
    var indexOfDigit = sanitisedArray.indexOf(2);
    return sanitisedArray[indexOfDigit] === 2 && sanitisedArray[indexOfDigit + 1] === 7 && sanitisedArray[indexOfDigit + 2] === 1;
}