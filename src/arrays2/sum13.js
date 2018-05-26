module.exports = function sum13(givenArray) {
    if (!givenArray.length) {
        return 0;
    }

    const is13Present = givenArray.indexOf(13) > -1;

    let sanitisedArray = is13Present ? givenArray.slice(0, givenArray.indexOf(13)) : givenArray;

    return sanitisedArray.reduce((accumulator, current) => {
        return accumulator + current;
    }, 0);
}