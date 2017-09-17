var expect = require('chai').expect;
var assert = require('assert');
var firstLast6 = require('../../src/arrays1/firstLast6');

describe('firstLast6', function() {
    it('should be defined', function() {
        expect(firstLast6([1,2,6])).to.be.defined;
    });

    it('should return true if the first element is 6', function() {
        assert.equal(true, firstLast6([6, 1, 4]));
    });

    it('should return true if the last element is 6', function() {
        assert.equal(true, firstLast6([4, 1, 6]));
    });

    it('should return true if both first ans last elements are 6', function() {
        assert.equal(true, firstLast6([6, 1, 6]));
    });

    it('should return the correct results for an array of chars', function() {
        assert.equal(true, firstLast6(['6', '1']));
    });

    it('should return false if the length of the array is less than 2', function() {
        assert.equal(false, firstLast6([6]));
    });

    it('should return false if the first or last element is not 6', function() {
        assert.equal(false, firstLast6([2, 1, 4]));
    });
});