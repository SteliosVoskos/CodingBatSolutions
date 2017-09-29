var assert = require('assert');
var expect = require('chai').expect;
var commonEnd = require('../../src/arrays1/commonEnd');

describe("commonEnd", function () {
    it("should be defined", function () {
        expect(commonEnd([1, 2], [1, 2])).to.be.defined;
    });

    it("should return false if the first array is empty", function () {
        assert.deepEqual(false, commonEnd([], [1, 2]));
    });

    it("should return false if the second array is empty", function () {
        assert.deepEqual(false, commonEnd([1, 2], []));
    });

    it("should return false if the both arrays are empty", function () {
        assert.deepEqual(false, commonEnd([], []));
    });

    it("should return true if both arrays have common ends", function () {
        assert.deepEqual(true, commonEnd([1, 2], [1, 2]));
    });

    it("should return false if the first array contains characters instead of numbers", function () {
        assert.deepEqual(false, commonEnd(['a', 'b'], [1, 2]));
    });

    it("should return false if the second array contains characters instead of numbers", function () {
        assert.deepEqual(false, commonEnd([1, 2], ['a', 'b']));
    });

    it("should return false if the both array contain characters instead of numbers", function () {
        assert.deepEqual(false, commonEnd(['a', 'b'], ['a', 'b']));
    });
});
