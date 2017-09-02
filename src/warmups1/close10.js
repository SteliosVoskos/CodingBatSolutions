module.exports = function close10(firstNumber, secondNumber) {
    if(10 - Math.abs(firstNumber) < 10 - Math.abs(secondNumber)) {
        return Math.abs(firstNumber);
    } else if (10 - Math.abs(firstNumber) > 10 - Math.abs(secondNumber)) {
        return Math.abs(secondNumber);
    }
    return 0;
}