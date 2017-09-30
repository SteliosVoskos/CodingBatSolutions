module.exports = function sum3(givenArray) {
    if (givenArray.length < 3 || givenArray.length > 3) {
        return 0;
    }

    var sanitisedArray = givenArray.map(function(givenArrayItem) {
        if (isNaN(givenArrayItem)) {
            return false;
        }

        return givenArrayItem;
    });

    if (sanitisedArray.indexOf(false) > -1) {
        return 0;
    }

    return sanitisedArray[0] + sanitisedArray[1] + sanitisedArray[2];
}