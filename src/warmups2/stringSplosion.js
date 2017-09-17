module.exports = function stringSplosion(givenString) {
    var newString = '';
    for (var index = 0; index <= givenString.length - 1; index++) {
        newString += givenString.substring(0, index);
    }

    return newString + givenString;
}