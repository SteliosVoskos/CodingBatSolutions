module.exports = function stringMatch(firstString, secondString) {
    var occurence = 0;
    var firstSanitisedString = firstString.toString();
    var secondSanitisedString = secondString.toString();
    for(var firstStringCounter = 0; firstStringCounter <= firstSanitisedString.length - 2; firstStringCounter++) {
        for(var secondStringCounter = 0; secondStringCounter <= secondSanitisedString.length - 2; secondStringCounter++) {
            if (firstSanitisedString.substring(firstStringCounter, firstStringCounter + 2) === secondSanitisedString.substring(secondStringCounter, secondStringCounter + 2)) {
                occurence++;
            }
        }   
    }

    return occurence;
}