module.exports = function no23(givenArray) {
    if (givenArray.length < 2) {
        return false;
    }

    const is2Present = givenArray.indexOf(2) > - 1;
    const is3Present = givenArray.indexOf(3) > - 1;

    if (is2Present || is3Present) {
        return false;
    }

    return true;
}