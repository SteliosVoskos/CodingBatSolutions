var expect = require('chai').expect;
var assert = require('assert');
var has271 = require('../../src/warmups2/has271');

describe('has271', function() {
    it('should be defined', function() {
        expect(has271([2, 7, 1])).to.be.defined;
    });

    it('should return true if the array contains the numbers 2,7,1 in a row', function() {
        assert.equal(true, has271([1, 2, 7, 1, 2]));
    });

    it('should still return the correct result if the array is an array of strings', function() {
        assert.equal(true, has271(['1', '2', '7', '1', '2']));
    });

    it('should return false if the digits 2,7,1 are not present in a row in the given array', function() {
        assert.equal(false, has271([2, 1, 2, 2, 2]));
    });

    it('should not return true if the digits 2,7,1 are not present in a row in the given array', function() {
        assert.notEqual(true, has271([2, 1, 2, 2, 2]));
    });
});