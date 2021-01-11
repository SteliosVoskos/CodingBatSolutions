'use strict'
const expect = require('chai').expect;
const chunkArray = require('../../src/technicalTest/chunkArray');
describe('Chunk Array', () => {
    it('should be defined', () => {
        expect(chunkArray([1, 2, 3, 4, 5], 1)).to.be.defined;
    });

    it("should throw an error if the chunkLength is greater than the array length", function () {
        expect(() => chunkArray([1, 2, 3, 4], 5)).to.throw(Error);
    });

    it('should return the array in chunks of 2, if the user passes 2 as an argument', () => {
        expect(chunkArray([1, 2, 3, 4, 5], 2)).to.deep.equal([[1, 2], [3, 4], [5]]);
    });

    it("should throw an error if the givenArray is an empty array", function () {
        expect(() => chunkArray([])).to.throw(Error);
    });

    it("should throw an error if the givenArray is not an array", function () {
        expect(() => chunkArray('1')).to.throw(Error);
    });

    it("should throw an error if the chunkLength is not a number", function () {
        expect(() => chunkArray('1', [])).to.throw(Error);
    });

    it("should throw an error if the chunkLength is 0", function () {
        expect(() => chunkArray([1, 2, 3, 4], 0)).to.throw(Error);
    });

    it("should throw an error if the chunkLength is a negative integer", function () {
        expect(() => chunkArray([1, 2, 3, 4], -1)).to.throw(Error);
    });
});
