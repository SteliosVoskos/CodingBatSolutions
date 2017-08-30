module.exports = function in1020(firstNum, secondNum) {
    if (typeof firstNum !== 'number' || typeof secondNum !== 'number') {
        return false;
    }
    return (firstNum >= 10 && firstNum <= 20) || (secondNum >= 10 && secondNum <= 20); 
}