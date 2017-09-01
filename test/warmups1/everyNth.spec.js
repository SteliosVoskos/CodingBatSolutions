var assert = require('assert');
var expect = require('chai').expect;
var everyNth = require('../../src/warmups1/everyNth');

describe('everyNth', function() {
    it('should be defined', function() {
        expect(everyNth('12', 1)).to.be.defined;
    });

    it('should return the empty string if the givenString param is empty', function() {
        assert.equal('', everyNth('', 0));
    });

    it('should return the empty string if the givenString is not null and the n parameter is 0', function() {
        assert.equal('', everyNth('123', 0));
    });

    it('should return the empty string if the givenString is null and the n parameter is greater than 0', function() {
        assert.equal('', everyNth('', 4));
    });

    it('should return just the first character if n is 1', function() {
        assert.equal('a', everyNth('abcd', 1));
    });

    it('should return the correct nth string for n 2', function() {
        assert.equal('0246', everyNth('01234567', 2));
    });

    it('should return the correct nth string for n 3', function() {
        assert.equal('036', everyNth('01234567', 3));
    });
})