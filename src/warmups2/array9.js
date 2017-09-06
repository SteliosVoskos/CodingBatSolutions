module.exports = function array9(givenArray) {
    return givenArray.filter(function(arrayDigit) {
        return arrayDigit === 9;
    }).length;
}