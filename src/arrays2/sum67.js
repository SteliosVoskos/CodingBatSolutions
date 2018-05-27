module.exports = function sum67(givenArray) {
    const indexOfSix = givenArray.indexOf(6);
    const indexOfSeven = givenArray.indexOf(7);
    const modifiedArray = [...givenArray.slice(0, indexOfSix), ...givenArray.slice(indexOfSeven + 1)];
    const sanitisedArray = indexOfSix > -1 && indexOfSeven > -1 ? modifiedArray : givenArray;
    return sanitisedArray.reduce((accumulator, current) => {
        return accumulator + current;
    }, 0);
}