module.exports = function in3050(firstNum, secondNum) {
    if (typeof firstNum !== 'number' || typeof secondNum !== 'number') {
        return false;
    }
    return (firstNum >= 30 && secondNum <= 40) || (firstNum >= 40 && secondNum <= 50) ; 
}