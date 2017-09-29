module.exports = function commonEnd(givenArrayA, givenArrayB) {
    if (!givenArrayA.length || !givenArrayB.length) {
        return false;
    }

    var sanitisedArrayA = givenArrayA.map(function(givenArrayItem) {
        if (isNaN(givenArrayItem)) {
            return false;
        }

        return givenArrayItem;
    });

    var sanitisedArrayB = givenArrayB.map(function(givenArrayItem) {
        if (isNaN(givenArrayItem)) {
            return false;
        }

        return givenArrayItem;
    });

    if (sanitisedArrayA.indexOf(false) > -1 || sanitisedArrayB.indexOf(false) > -1) {
        return false;
    }

    return sanitisedArrayA[sanitisedArrayA.length] === sanitisedArrayB[sanitisedArrayB.length];
}
