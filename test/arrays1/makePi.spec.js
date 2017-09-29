var assert = require('assert');
var expect = require('chai').expect;
var makePi = require('../../src/arrays1/makePi');

describe("makePi", function () {
    it("should be defined", function () {
        expect(makePi()).to.be.defined;
    });

    it("should return an array with the element 3,1,4 in exact order", function () {
        assert.deepEqual([3, 1, 4], makePi());
    });

    it("should bot return an array with other elements other than 3,1,4 in exact order", function () {
        assert.notDeepEqual([1, 3, 4], makePi());
    });

    it("should never return the empty array", function () {
        assert.notDeepEqual([], makePi())
    });

    it("should never return the elements in a string", function () {
        assert.notDeepEqual('3,1,4', makePi())
    });

    it("should never return the elements in a number format", function () {
        assert.notDeepEqual(314, makePi());
    });
});
