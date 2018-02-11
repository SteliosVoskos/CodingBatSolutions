'use strict'
const expect = require('chai').expect;
const sanitisedArray = require('../../src/helpers/sanitisedArray');

function square(givenArray) {
    if (!givenArray.length) {
        return [];
    }

    if(sanitisedArray(givenArray).indexOf(false) > -1) {
        throw new Error('The square function expects an array of ints or an array of numbers in the form of a char. Please remove all alpha or special characters from the array.');
    }

    return givenArray.map(function(givenArrayElement) {
        return givenArrayElement * givenArrayElement;
    });
}

describe('Square', () => {
    it('should be defined', () => {
        expect(square([1, 2, 3])).to.be.defined;
    });
    it('should return an empty array if an emtpy array is provided', () => {
        expect(square([])).to.deep.equal([]);
    });

    it('should square all elements in the array', () => {
        expect(square([1, 2, 3, 4])).to.deep.equal([1, 4, 9, 16]);
    });

    it('should throw an error if the array contains at least one element that does not resolve to a number', () => {
        expect(() => square([1, 'a', 7, 't'])).to.throw(Error);
    });
});