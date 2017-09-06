var expect = require('chai').expect;
var assert = require('assert');
var last2 = require('../../src/warmups2/last2');

describe('last2', function() {
    it('should be defined', function() {
        expect(last2('abc')).to.be.difined;
    });

    it('should return the number of times that a substring appears in a string', function() {
        assert.equal(2, last2('axxxaaxx'));
    });

    it('should not return the wrong result', function() {
        assert.notEqual(1, last2('axxxaaxx'));
    });

    it('should return 0 if the length of the string has length 2', function() {
        assert.equal(0, last2('22'));
    });

    it('should return 0 if the length of the string has length 1', function() {
        assert.equal(0, last2('1'));
    });

    it('should return 0 if the length of the string has length 0', function() {
        assert.equal(0, last2(''));
    });
});