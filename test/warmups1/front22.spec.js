var assert = require('assert');
var expect = require('chai').expect;
var front22 = require('../../src/warmups1/front22');

describe('front22', function() {
    it('should be defined', function() {
        expect(front22('123')).to.be.defined;
    });

    it('should return the char 2 times in the front if the string has length 1', function() {
        assert.equal('111', front22('1'));
    });

    it('should return just an empty string in the case of an empty string input', function() {
        assert.equal('', front22(''));
    });

    it('should always print the first two characters once in the front and once in the back, if the parameter has length bigger than 2', function() {
        assert.equal('hehellohe', front22('hello'));
    });
})