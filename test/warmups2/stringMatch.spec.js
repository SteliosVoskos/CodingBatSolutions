var expect = require('chai').expect;
var assert = require('assert');
var stringMatch = require('../../src/warmups2/stringMatch');

describe('stringMatch', function() {
    it('should be defined', function() {
        expect(stringMatch('ABC', 'ABC')).to.be.defined;
    });

    it('should return the number of identical substrings in the two strings', function() {
        assert.equal(3, stringMatch('xxcaazz', 'xxbaaz'))
    });

    it('should return 0 if there is no match in the strings', function() {
        assert.equal(0, stringMatch('xxyy', 'zzaa'))
    });

    it('should return 0 if the strings are empty', function() {
        assert.equal(0, stringMatch('', ''))
    });

    it('should still return the right result if the given inputs are numbers', function() {
        assert.equal(1, stringMatch(12, 12));
    });

    it('should not return the wrong result', function() {
        assert.notEqual(2, stringMatch('xxcaazz', 'xxbaaz'))
    });
});