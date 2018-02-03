'use strict'
const expect = require('chai').expect;
const sanitisedArray = require('../../src/helpers/sanitisedArray');

function doubling(givenArray) {
    if(sanitisedArray(givenArray).indexOf(false) > -1) {
        throw new Error('The doubling function expects an array of ints or an array of numbers in the form of a char. Please remove all alpha or special characters from the array.')
    }
    return givenArray.map(function(givenArrayElement) {
        return 2 * givenArrayElement;
    });
}

describe('doubling', () => {
    it('should be defined', () => {
        expect(doubling([1, 2, 3])).to.be.defined;
    });

    it('should double each element in the array', () => {
        expect(doubling([1, 2, 3])).to.deep.equal([2, 4, 6]);
        expect(doubling(['1', '2', '3'])).to.deep.equal([2, 4, 6]);
    });

    it('should not double the elements and it should throw an error, if the elements do not resolve to a number', () => {
        expect(() => doubling(['a', 'b', 3])).to.throw(Error);
    });
});