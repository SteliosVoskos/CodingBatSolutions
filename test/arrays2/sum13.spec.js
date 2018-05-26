'use strict'
const expect = require('chai').expect;
const sum13 = require('../../src/arrays2/sum13');

describe('sum13', () => {
    it('should return 0 if the array is empty', () => {
        expect(sum13([])).to.equal(0);
    });

    it('should return the sum of the array', () => {
        expect(sum13([1, 2, 3, 4])).to.equal(10);
    });

    it('should return the sum of the array and ommit any digits after the number 13', () => {
        expect(sum13([1, 2, 3, 4, 13, 1, 2, 3, 4])).to.equal(10);
    });

    it('should return 0 if the array is not null, but the first element is 13', () => {
        expect(sum13([13, 2, 3, 4, 1, 1, 2, 3, 4])).to.equal(0);
    });

    it('should return the sum of the array and ommit the 13 if it appears as the last element', () => {
        expect(sum13([2, 3, 13])).to.equal(5);
    });
})