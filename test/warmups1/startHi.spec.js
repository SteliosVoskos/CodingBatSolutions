var expect = require('chai').expect;
var assert = require('assert');
var startHi = require('../../src/warmups1/startHi');

describe('startHi', function() {
    it('should be defined', function() {
        expect(startHi('abc')).to.be.defined;
    });

    it('should return true if the string begins with hi, with a lowercase h', function() {
        assert.equal(true, startHi('hi you'));
    });

    it('should return true if the string begins with Hi, with a lowercase H', function() {
        assert.equal(true, startHi('Hi you'));
    });

    it('should return false if the string doesnt begin with hi', function() {
        assert.equal(false, startHi('you'));
    });
    
    it('should return false if the given string is the empty string', function() {
        assert.equal(false, startHi(''));
    });
});