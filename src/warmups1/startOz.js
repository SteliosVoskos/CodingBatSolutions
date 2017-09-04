module.exports = function startOz(givenString) {
    if (givenString.charAt(0) === 'o' && givenString.charAt(1) !== 'z') {
        return 'o';
    }
    if (givenString.charAt(0) !== 'o' && givenString.charAt(1) === 'z') {
        return 'z';
    }
    if (givenString.charAt(0) === 'o' && givenString.charAt(1) === 'z') {
        return 'oz';
    }

    return givenString;
}