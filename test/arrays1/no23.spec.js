'use strict'

const expect = require('chai').expect;
var no23 = require('../../src/arrays1/no23');

describe('no23', () => {
    it('should false if the array is less than 2', () => {
        expect(
            no23([1])
        ).to.equal(false);
    });

    it('should return false if the array contains a 2 and a 3', () => {
        expect(
            no23([1, 2, 3])
        ).to.equal(false);
    });

    it('should return true if it does not contain a 2 and a 3', () => {
        expect(
            no23([1, 4])
        ).to.equal(true);
    });

    it('should return false if it contains only a 2 and not a 3', () => {
        expect(
            no23([1, 2])
        ).to.equal(false);
    });

    it('should return false if it contains only a 3 and not a 2', () => {
        expect(
            no23([1, 3])
        ).to.equal(false);
    });

    it('should return true if it contains neither a 2 or a 3', () => {
        expect(
            no23([1, 4])
        ).to.equal(true);
    });
})