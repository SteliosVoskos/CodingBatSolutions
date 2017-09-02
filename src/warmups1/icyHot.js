module.exports = function icyHot(firstNum, secondNum) {
    return (firstNum > 100 && secondNum < 0) || (secondNum > 100 && firstNum < 0);
}