module.exports = function or35(number) {
    if (number < 0) {
        return false;
    }
    return number % 3 === 0 || number % 5 === 0;
};