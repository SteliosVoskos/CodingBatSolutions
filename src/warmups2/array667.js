var convertStringToArray = require('../helpers/convertStringToArray');
module.exports = function array667(givenArray) {
    var occurence = 0;
    if (typeof givenArray !== 'object') {
        var sanitisedArray = convertStringToArray(givenArray).map(function(item) { return Number(item); });

        console.log(sanitisedArray);
        for (var index = 0; index <= sanitisedArray.length - 2; index++) {
            if (sanitisedArray[index] === 6 && (sanitisedArray[index + 1] === 6) || sanitisedArray[index + 1] === 7) {
                occurence++;
            }
        }
        return occurence;
    }
    for (var index = 0; index <= givenArray.length - 2; index++) {
        if (givenArray[index] === 6 && (givenArray[index + 1] === 6) || givenArray[index + 1] === 7) {
            occurence++;
        }
    }
    return occurence;
}