'use strict'

const assert = require('chai').assert;
const expect = require('chai').expect;
const http = require('http');
const sum67 = require('../../src/arrays2/sum67');

describe('sum67', () => {
    it('should return 0 if the given array is empty', () => {
        expect(
            sum67([])
        ).to.equal(0);
    });

    it('should return the sum of the array', () => {
        expect(
            sum67([1, 2, 3])
        ).to.equal(6);
    });

    it('should return the sum of the array and it should ommit any numbers that come after a 6 and extend to the next 7', () => {
        expect(
            sum67([1, 2, 3, 6, 7, 4])
        ).to.equal(10);
    });

    it('should return the sum of the array, even if it contains a 6 given that it does not have a 7 afterwards', () => {
        expect(
            sum67([1, 2, 3, 6, 1, 4])
        ).to.equal(17);
    });

    it('should return the sum of the array, even if it contains a 7 given that it does not have a 6 before', () => {
        expect(
            sum67([1, 2, 3, 7, 1, 4])
        ).to.equal(18);
    });
});