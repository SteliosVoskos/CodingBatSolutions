var assert = require('assert');
var expect = require('chai').expect;
var array9 = require('../../src/warmups2/array9');

describe('array9', function() {
    it('should be defined', function() {
        expect(array9([1, 2])).to.be.defined;
    });

    it('should return how many times number 9 occurs in the array', function() {
        assert.equal(2, array9([9, 1, 2, 9]));
    });

    it('should not return the wrong result', function() {
        assert.notEqual(4, array9([9, 1, 2, 9]));
    });

    it('should return 0 if number 9 does not occur in the given array', function() {
        assert.equal(0, array9([1, 2, 3]));
    });
});