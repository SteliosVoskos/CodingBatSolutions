var expect = require('chai').expect;
var assert = require('assert');
var stringTimes = require('../../src/warmups2/stringTimes');

describe('stringTimes', function() {
    it('should be defined', function() {
        expect(stringTimes('Hi', 3)).to.be.defined;
    });

    it('should return the given string as many times as the times parameter instructs', function() {
        assert.equal('HiHiHi', stringTimes('Hi', 3));
    });

    it('should return the given string as many times as the times parameter instructs', function() {
        assert.equal('Hi youHi youHi youHi youHi youHi you', stringTimes('Hi you', 6));
    });

    it('should not return the given string as it is as if the times param is greater than one', function() {
        assert.notEqual('Hi', stringTimes('Hi', 3));
    });

    it('should return the given string of the times parameter is 1', function() {
        assert.equal('Hi', stringTimes('Hi', 1));
    });

    it('should return the given string of the times parameter is 0', function() {
        assert.equal('Hi', stringTimes('Hi', 0));
    });
});