var assert = require('assert');
var expect = require('chai').expect;
var or35 = require('../../src/warmups1/or35');

describe('or35', function() {
    it('should always be defined', function() {
        expect(or35(10)).to.be.defined;
    });

    it('should return true if the given number is a multiple of 3', function() {
        expect(or35(6)).to.be.true;
    });

    it('should return true if the given number is a multiple of 5', function() {
        expect(or35(10)).to.be.true;
    });

    it('should return false if the given number is not a multiple of 3 or 5', function() {
        expect(or35(7)).to.be.false;
    });

    it('should return false if the given number is negative and its a multiple of 5', function() {
        expect(or35(-10)).to.be.false;
    });

    it('should return false if the given number is negative and its a multiple of 3', function() {
        expect(or35(-6)).to.be.false;
    });

    it('should return false if the given number is negative and its not a multiple of 3 or 5', function() {
        expect(or35(-7)).to.be.false;
    });
})