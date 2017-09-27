module.exports = function sameFirstLast(givenArray) {

    if (!givenArray.length || typeof givenArray === 'string') {
        return false;
    }
    if (givenArray.length === 1 && typeof givenArray[0] !== 'string') {
        return true;
    }
    const sanitisedArray = givenArray.map(function(givenArrayItem) {
        if (isNaN(givenArrayItem)) {
            return false;
        }

        return givenArrayItem;
    });

    if (sanitisedArray.indexOf(false) > -1) {
        return false;
    }
    return sanitisedArray[0] === sanitisedArray[givenArray.length - 1];
}
