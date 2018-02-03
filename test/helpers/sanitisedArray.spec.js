'use strict'
const expect = require('chai').expect;
const sanitisedArray = require('../../src/helpers/sanitisedArray');

describe('hasNumber', () => {
    it('should be defined', () => {
        expect(sanitisedArray([1, 2, 3])).to.be.defined;
    });

    it('should replace a char in the array with false', () => {
        expect(sanitisedArray(['a', 2, 'c'])).to.deep.equal([false, 2, false]);
    });

    it('should return the array as it is, if no character has been detected', () => {
        expect(sanitisedArray([1, 2, 3])).to.deep.equal([1, 2, 3]);
    });
});