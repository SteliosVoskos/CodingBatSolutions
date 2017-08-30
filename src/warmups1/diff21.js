module.exports = function diff21(n) {
    return n > 21 ? 2 * (n - 21) : Math.abs(n - 21);
}