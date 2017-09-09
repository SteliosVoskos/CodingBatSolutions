module.exports = function countXX(givenString) {
    var occurence = 0;
    if (typeof givenString !== 'string') {
        var transformedString = givenString.toString().replace(/,/g, '');
        for (var counter = 0; counter <= transformedString.length - 1; counter++) {
            if (transformedString.substring(counter, counter + 2) === 'xx') {
                occurence++;
            }
        }
    
        return occurence;
    }
    for (var counter = 0; counter <= givenString.length - 1; counter++) {
        if (givenString.substring(counter, counter + 2) === 'xx') {
            occurence++;
        }
    }

    return occurence;
}