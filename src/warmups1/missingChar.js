module.exports = function missingChar(str, n) {
    if (n > str.length) {
      return str;
    }
    return str.substring(0, n) + str.substring(n + 1);
}