var assert = require('assert');
var expect = require('chai').expect;
var sum3 = require('../../src/arrays1/sum3');

describe('sum3', function() {
    it('should be defined', function() {
        expect(sum3([1,2,3])).to.be.defined;
    });

    it('should return 0 if the array has length 2', function() {
        assert.equal(0, sum3([1, 2]));
    });

    it('should return 0 if the array has length 1', function() {
        assert.equal(0, sum3([1]));
    });

    it('should return 0 if the array has length 0', function() {
        assert.equal(0, sum3([]));
    });

    it('should return 0 if the array has length more than 3', function() {
        assert.equal(0, sum3([1, 2, 3, 4]));
    });

    it('should return the sum of the array, if has length 3', function() {
        assert.equal(6, sum3([1, 2, 3]));
    });

    it('should not return the sum of the array, if has length 3 and the numbers have character form in the array', function() {
        assert.notEqual(6, sum3(['1', '2', '3']));
    });

    it('should rather termintate the function if the input is an array of characters', function() {
        assert.equal(0, sum3(['a', 'b', 'c']));
    });
});