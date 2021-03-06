var assert = require('assert');
var expect = require('chai').expect;
var in1020 = require('../../src/warmups1/int1020');

describe('in1020', function() {
    it('should be defined', function() {
        expect(in1020(10, 20)).to.be.defined;
    });

    it('should return true if the firstNum is between 10 and 20', function() {
        assert.equal(true, in1020(12, 9));
    });

    it('should return true if the secondNum is between 10 and 20', function() {
        assert.equal(true, in1020(9, 12));
    });

    it('should return true if both parameters are between 10 and 20', function() {
        assert.equal(true, in1020(12, 12));
    });

    it('should return false if neither parameter is between 10 and 20', function() {
        assert.equal(false, in1020(9,9));
    });

    it('should return false if the parameters are not of type Number', function() {
        assert.equal(false, in1020('12', '12'));
    });
});