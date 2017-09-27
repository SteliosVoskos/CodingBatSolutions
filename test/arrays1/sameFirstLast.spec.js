var assert = require('assert');
var expect = require('chai').expect;
var sameFirstLast = require('../../src/arrays1/sameFirstLast');

describe("sameFirstLast", function () {
    it("should be defined", function () {
        expect(sameFirstLast([1])).to.be.defined;
    });

    it("should return false if the array is empty", function () {
        assert.equal(false, sameFirstLast([]));
    });

    it("should return true if the array has length 1", function () {
        assert.equal(true, sameFirstLast([1]));
    });

    it("should not return true when the array has length 1 and the element is not a number", function () {
        assert.equal(false, sameFirstLast(['a']));
    });

    it("should return true if the array has length of more thatn 1 and the first and the last elements are the same", function () {
        assert.equal(true, sameFirstLast([1, 2, 1]));
    });

    it("should not return true if the first and last elements are not equal", function () {
        assert.equal(false, sameFirstLast([2, 2, 1]));
    });

    it("should work with negative numbers and return true if both first and last elements are the same", function () {
        assert.equal(true, sameFirstLast([-1, 2, -1]));
    });

    it("should work with negative numbers and return false if both first and last elements are the different", function () {
        assert.equal(false, sameFirstLast([-1, 2, -2]));
    });

    it("should just return false if the elements if elements in the array are not a number", function () {
        assert.equal(false, sameFirstLast(['a', 1, 'a']));
    });

    it("should not return true if the given input is a string", function () {
        expect(sameFirstLast('121')).to.equal(false);
    });
});
