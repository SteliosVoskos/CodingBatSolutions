module.exports = function frontTimes(givenString, index) {
    var takenSubstring = givenString.substring(0, 3);
    var newString = '';
    if (index === 0) {
        return givenString;
    }
    for (var counter = 0; counter <= index - 1; counter++) {
        newString += takenSubstring;
    }
    return newString;
}