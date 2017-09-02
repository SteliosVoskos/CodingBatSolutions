var expect = require('chai').expect;
var assert = require('assert');
var stringE = require('../../src/warmups1/stringE');

describe('stringE', function() {
    it('should be defined', function() {
        expect(stringE('abc')).to.be.defined;
    });

    it('should return true if the string contains 3 e\'s', function() {
        assert.equal(true, stringE('heeello'));
    });

    it('should return true if the string contains 2 e\'s', function() {
        assert.equal(true, stringE('heello'));
    });

    it('should return true if the string contains 1 e', function() {
        assert.equal(true, stringE('hello'));
    });

    it('should return false if the string doesnt contain an e', function() {
        assert.equal(false, stringE('hllo'));
    });

    it('should return false if the string contains more than 3 e\'s', function() {
        assert.equal(false, stringE('heeeeeeello'));
    });

    it('should return false if the string is empty', function() {
        assert.equal(false, stringE(''));
    });
});