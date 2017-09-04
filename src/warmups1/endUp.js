module.exports = function endUp(givenString) {
    if (givenString.length < 3) {
        return givenString.toUpperCase();
    }
    var lastThreeCharaters = givenString.substring(givenString.length - 3);
    return givenString.replace(lastThreeCharaters, '') + lastThreeCharaters.toUpperCase();
}