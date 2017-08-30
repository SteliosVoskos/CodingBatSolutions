module.exports = function notString(str) {
    return str.length >= 3 && str.substring(0,3) === 'not' ? str : 'not ' + str;
}