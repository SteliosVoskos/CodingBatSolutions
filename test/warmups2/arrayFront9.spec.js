var assert = require('assert');
var expect = require('chai').expect;
var arrayFront9 = require('../../src/warmups2/arrayFront9');

describe('arrayFront9', function() {
    it('should be defined', function() {
        expect(arrayFront9([1,2,3])).to.be.defined;
    });

    it('should return true if 9 occurs in the array', function() {
        assert.equal(true, arrayFront9([9, 1]));
    });

    it('should still return the correct result for an array of chars', function() {
        assert.equal(true, arrayFront9(['9', '1']));
    });

    it('should throw an error if one of the array elements is not a number', function() {
        expect(function() {
            arrayFront9(['a', 9]).to.throw(Error);
        });
    });

    it('should return false if 9 is not in the array', function() {
        assert.equal(false, arrayFront9([8, 5]));
    });

    it('should never present wrong results', function() {
        assert.notEqual(true, arrayFront9([8, 5]));
    });
});