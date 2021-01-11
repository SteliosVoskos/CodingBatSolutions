module.exports = function chunkArray(givenArray, chunkLength) {
    if (!givenArray || !givenArray.length) {
        throw new Error('Please provide an array as an argument and add values in it.');
    }

    if (chunkLength <= 0 || chunkLength > givenArray.length) {
        throw new Error('The chunk length should be a positive integer and it should not be greater than the array length.');
    }
    return givenArray.reduce((chunks, currentElement, currentIndex) => {
        const index = Math.floor(currentIndex / chunkLength);
        if (!chunks[index]) chunks[index] = [];
        
        chunks[index].push(currentElement);
        return chunks;
    }, [])
}