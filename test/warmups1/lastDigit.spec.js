var assert = require('assert');
var expect = require('chai').expect;
var lastDigit = require('../../src/warmups1/lastDigit');

describe('lastDigit', function() {
    it('should be defined', function() {
        expect(lastDigit(2, 132)).to.be.defined;
    });

    it('should return true if the first param matches with the last digit of the second param', function() {
        assert.equal(true, lastDigit(2, 132));
    });

    it('should return true if the first param is 0 and the second param is 0', function() {
        assert.equal(true, lastDigit(0, 0));
    });

    it('should return false if the second param is negative', function() {
        assert.equal(false, lastDigit(2, -132));
    });

    it('should return false if the first param is negative', function() {
        assert.equal(false, lastDigit(-2, 132));
    });

    it('should return false if the first param is doesnt match with the last number of the digit', function() {
        assert.equal(false, lastDigit(9, 132));
    });
});