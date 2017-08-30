module.exports = function near100(n) {
    return Math.abs(n - 100) <= 10 || Math.abs(n - 200) <= 10;
}