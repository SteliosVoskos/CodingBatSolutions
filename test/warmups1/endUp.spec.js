var assert = require('assert');
var expect = require('chai').expect;
var endUp = require('../../src/warmups1/endUp');

describe('endUp', function() {
    it('should be defined', function() {
        expect(endUp('hello')).to.be.defined;
    });

    it('should transform the last three chars of the string to uppercase', function() {
        assert.equal('heLLO', endUp('hello'));
    });

    it('should not return the wrong string', function() {
        expect(endUp('hello')).to.not.equal('hello');
    });

    it('should not return the wrong string', function() {
        expect(endUp('hello')).to.not.equal('helLO');
    });

    it('should transform all the characters to uppercase if the string is of length less than 3', function() {
        assert.equal('HI', endUp('hi'));
    });

    it('should return an empty string if the given string is empty', function() {
        assert.equal('', endUp(''));
    });
});