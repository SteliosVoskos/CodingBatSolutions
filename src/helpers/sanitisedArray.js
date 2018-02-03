module.exports = function sanitisedArray(givenArray) {
    return givenArray.map(function(givenArrayItem) {
        if (isNaN(givenArrayItem)) {
            return false;
        }

        return givenArrayItem;
    });
};