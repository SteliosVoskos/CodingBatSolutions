module.exports = function startHi(givenString) {
    return givenString.substring(0,2) === 'hi' || givenString.substring(0,2) === 'Hi';
}