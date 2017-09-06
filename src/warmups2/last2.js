module.exports = function last2(givenString) {
    var occurences = 0;

    for (var stringIndex = 0; stringIndex < givenString.length - 2; stringIndex++) {
        if (givenString.substring(stringIndex, stringIndex + 2) === givenString.substring(givenString.length - 2)) {
            occurences++;
        }
    }

    return occurences;
}