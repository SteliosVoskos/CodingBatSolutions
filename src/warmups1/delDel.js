module.exports = function delDel(givenString) {
    var string = givenString.substring(1, 4);
    if (string === 'del') {
        return givenString.replace(string, '');
    }

    return givenString;
}