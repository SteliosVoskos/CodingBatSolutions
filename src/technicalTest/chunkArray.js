const chunkArray = (givenArray, chunkLength) => {
    if (!Array.isArray(givenArray) || (typeof chunkLength !== 'number')) { // check the types of the arguments
        throw new Error('The `givenArray` argument should be an array. The `chunkLength` argument should be a number');
    }

    if (!givenArray || !givenArray.length) { // Check if the array is defined and if it has any elements into it
        throw new Error('Please provide an array as an argument and add values in it.');
    }

    if (chunkLength <= 0 || chunkLength > givenArray.length) { // check if the chunk has a positive value and it is not exceeding the array's length
        throw new Error('The chunk length should be a positive integer and it should not be greater than the array length.');
    }
    return givenArray.reduce((chunks, currentElement, currentIndex) => {
        const index = Math.floor(currentIndex / chunkLength); // Get the correct index and use the Math.floor to round the value
        if (!chunks[index]) chunks[index] = []; // Initially, chunks[index] is undefined, so initiate a new chunk
        
        chunks[index].push(currentElement); 
        return chunks;
    }, [])
}

console.log(chunkArray([1, 2, 3, 4, 5], 5)); // prints [[1, 2], [3, 4], [5]]

module.exports = chunkArray;