module.exports = function firstLast6(givenArray) {
    if (givenArray.length < 2) {
        return false;
    }

    var sanitisedArray = givenArray.map(function(givenArrayItem) {
        return Number(givenArrayItem);
    });
    
    return sanitisedArray[0] === 6 || sanitisedArray[sanitisedArray.length - 1] === 6;
}