var assert = require('assert');
var expect = require('chai').expect;
var altPairs = require('../../src/warmups2/altPairs');

describe('altPairs', function() {
    it('should be defined', function() {
        expect(altPairs('12')).to.be.defined;
    });

    it('should return the pairs in the string', function() {
        assert.equal('Congrr', altPairs('CodingHorror'));
    });

    it('should return just the chars of the 0,1,4,5 indexes if a string is equal to 6 in length', function() {
        assert.equal('Heos', altPairs('Hellos'));
    });

    it('should return just the chars of the 0,1 indexes if a string is equal to 2 in length', function() {
        assert.equal('ab', altPairs('abc'));
    });

    it('should return whatever is there if the string length is less than 2', function() {
        assert.equal('a', altPairs('a'));
    });

    it('should still return the correct result if the given input is not a string, but a number', function() {
        assert.equal('12', altPairs(123));
    });

    it('should not return wrong results', function() {
        assert.notEqual('Hellos', altPairs('Hellos'));
    });
})