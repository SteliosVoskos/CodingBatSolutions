module.exports = function stringTimes(givenString, times) {
    if (times > 1) {
        var newString = '';
        for (var counter = 1; counter <= times; counter++) {
            newString += givenString;
        }
        
        return newString;
    }
    return givenString;
}