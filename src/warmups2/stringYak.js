module.exports = function stringYak(givenString) {
    var transformedString = givenString;

    if (typeof givenString !== 'string') {
        var stringFromArray = givenString.toString().replace(/,/g, '');
        for (var counter = 0; counter <= stringFromArray.length - 1; counter++) {
            if (stringFromArray.substring(counter, counter + 3) === 'yak') {
                transformedString = stringFromArray.replace(stringFromArray.substring(counter, counter + 3), '');
            }
        }
        return transformedString;    
    }
    for (var counter = 0; counter <= givenString.length - 1; counter++) {
        if (givenString.substring(counter, counter + 3) === 'yak') {
            transformedString = givenString.replace(givenString.substring(counter, counter + 3), '');
        }
    }
    return transformedString;   
}