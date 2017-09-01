var expect = require('chai').expect;
var assert = require('assert');
var backAround = require('../../src/warmups1/backAround');

describe('backAround', function() {
    it('should be defined', function() {
        expect(backAround('abc')).to.be.defined;
    });

    it('should append the last character of the string before and after the string', function() {
        assert.equal('cabcc', backAround('abc'));
    });

    it('should still append the last character of the string of length 1 before and after the string', function() {
        assert.equal('aaa', backAround('a'));
    });

    it('should return the empty string if the given string is empty', function() {
        assert.equal('', backAround(''));
    });
});