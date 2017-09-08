var assert = require('assert');
var expect = require('chai').expect;
var array123 = require('../../src/warmups2/array123');

describe('array123', function() {
    it('should be defined', function() {
        expect(array123([1, 2, 3])).to.be.defined;
    });

    it('should return true if the array contains the numbers 1,2,3 in a row', function() {
        assert.equal(true, array123([2, 1, 2, 3, 2]));
    });

    it('should still return the correct result if the array is an array of strings', function() {
        assert.equal(true, array123(['2', '1', '2', '3', '2']));
    });

    it('should return false if the digits 1,2,3 are not present in a row in the given array', function() {
        assert.equal(false, array123([2, 1, 2, 2, 2]));
    });

    it('should not return true if the digits 1,2,3 are not present in a row in the given array', function() {
        assert.notEqual(true, array123([2, 1, 2, 2, 2]));
    });
})