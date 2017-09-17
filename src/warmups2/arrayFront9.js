module.exports = function arrayFront9(givenArray) {
    return givenArray.map(function(givenArrayItem) {
        return Number(givenArrayItem);
    }).indexOf(9) > -1;
}