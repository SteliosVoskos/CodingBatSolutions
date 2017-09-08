var expect = require('chai').expect;
var assert = require('assert');
var noTriples = require('../../src/warmups2/noTriples');

describe('notriples', function() {
    it('should be defined', function() {
        expect(noTriples([1, 2, 3])).to.be.defined;
    });

    it('should return false if the array contains the numbers 1,1,1 in a row', function() {
        assert.equal(false, noTriples([2, 1, 1, 1, 2]));
    });

    it('should still return the correct result if the array is an array of strings', function() {
        assert.equal(false, noTriples(['2', '1', '1', '1', '2']));
    });

    it('should return true if the digits 1,1,1 are not present in a row in the given array', function() {
        assert.equal(true, noTriples([2, 1, 1, 2, 2]));
    });

    it('should return true if the digits 1,1,1 are not present in a row in the given array of strings', function() {
        assert.equal(true, noTriples(['2', '1', '1', '2', '2']));
    });

    it('should not return true if the digits 1,1,1 are present in a row in the given array', function() {
        assert.notEqual(true, noTriples([2, 1, 1, 1, 2]));
    });
});