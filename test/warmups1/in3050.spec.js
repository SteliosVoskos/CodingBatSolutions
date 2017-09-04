var assert = require('assert');
var expect = require('chai').expect;
var in3050 = require('../../src/warmups1/in3050');

describe('in3050', function() {
    it('should be defined', function() {
        expect(in3050(10, 20)).to.be.defined;
    });

    it('should return true if both params are between 30 and 40', function() {
        assert.equal(true, in3050(31, 37));
    });

    it('should return true if both params are between 40 and 50', function() {
        assert.equal(true, in3050(41, 47));
    });

    it('should return true if both params are between 30 and 40 and they are equal', function() {
        assert.equal(true, in3050(31, 31));
    });

    it('should return true if both params are between 40 and 50 and they are equal', function() {
        assert.equal(true, in3050(41, 41));
    });

    it('should return false if neither parameter is between 30 and 40, or 40 and 50', function() {
        assert.equal(false, in3050(9,9));
    });

    it('should return false if the parameters are strings', function() {
        assert.equal(false, in3050('35', '45'));
    });
});