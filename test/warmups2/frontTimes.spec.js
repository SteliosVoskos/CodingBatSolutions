var assert = require('assert');
var expect = require('chai').expect;
var frontTimes = require('../../src/warmups2/frontTimes');

describe('frontTimes', function() {
    it('should be defined', function() {
        expect(frontTimes('hello', 2)).to.be.defined;
    });

    it('should take the first three characters from the string and return those characters n times', function() {
        assert.equal('helhelhel', frontTimes('hello', 3));
    });

    it('should return the given string if the index param is 0', function() {
        assert.equal('hello', frontTimes('hello', 0));
    });

    it('should return the empty string if the index param is negative', function() {
        assert.equal('', frontTimes('hello', -1));
    });

    it('should still return the correct result if index comes through as a string', function() {
        assert.equal('helhelhel', frontTimes('hello', '3'));
    });
});