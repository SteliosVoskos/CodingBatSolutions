var assert = require('assert');
var expect = require('chai').expect;
var countXX = require('../../src/warmups2/countXX');

describe('countXX', function() {
    it('should be defined', function() {
        expect(countXX('ABC')).to.be.defined;
    });

    it('should return the number of xx in a string', function() {
        assert.equal(2, countXX('xxx'));
    });

    it('should still return the right result if the input is an array of characters', function() {
        assert.equal(2, countXX(['x', 'x', 'x']));
    });

    it('should not return the wrong result', function() {
        assert.notEqual(1, countXX('xxx'));
    });
});