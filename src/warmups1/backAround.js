module.exports = function backAround(givenString) {
    return givenString.charAt(givenString.length -1)+givenString+givenString.charAt(givenString.length - 1);
}