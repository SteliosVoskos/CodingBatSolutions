var assert = require('assert');
var expect = require('chai').expect;
var intMax = require('../../src/warmups1/intMax');

describe('intMax', function() {
    it('should be defined', function() {
        expect(intMax(1,2,3)).to.be.defined;
    });

    it('should find the maximum between the given params', function() {
        assert.equal(4, intMax(1, 2, 4));
    });

    it('should return any of the given inut if the params are equal', function() {
        assert.equal(2, intMax(2, 2, 2));
    });

    it('should return -1 if the given inputs are not numbers', function() {
        assert.equal(-1, intMax('2', '3', '4'));
    });
});