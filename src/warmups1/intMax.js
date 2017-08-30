module.exports = function intMax(firstNum, secondNum, thirdNum) {
    if (typeof firstNum !== 'number' || typeof secondNum !== 'number' || typeof thirdNum !== 'number') {
        return -1;
    }
    return Math.max.call(null, firstNum, secondNum, thirdNum);
}