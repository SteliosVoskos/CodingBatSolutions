var expect = require('chai').expect;
var assert = require('assert');
var mixStart = require('../../src/warmups1/mixStart');

describe('startHi', function() {
    it('should be defined', function() {
        expect(mixStart('abc')).to.be.defined;
    });

    it('should return true if the string has ix after the first char', function() {
        assert.equal(true, mixStart('mix you'));
    });

    it('should return true if the string has ix after the first char', function() {
        assert.equal(true, mixStart('pix you'));
    });

    it('should return false if the string doesnt have ix after the first char', function() {
        assert.equal(false, mixStart('ppp you'));
    });
    
    it('should return false if the given string is the empty string', function() {
        assert.equal(false, mixStart(''));
    });
});