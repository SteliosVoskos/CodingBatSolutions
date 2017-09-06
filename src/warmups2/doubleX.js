module.exports = function doubleX(givenString) {
    var indexOfX = givenString.indexOf('x');

    return givenString.substring(indexOfX + 1, indexOfX + 2) === 'x';
}