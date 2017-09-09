var assert = require('assert');
var expect = require('chai').expect;
var stringYak = require('../../src/warmups2/stringYak');

describe('stringYak', function() {
    it('should be defined', function() {
        expect(stringYak('yak')).to.be.defined;
    });

    it('should replace the yak with the empty string if yak occurs in the string', function() {
        assert.equal('y', stringYak('yaky'));
    });

    it('should still return the right result if the input is an array of characters', function() {
        assert.equal('y', stringYak(['y','a','k','y']));
    });

    it('should return the sting as it is if yak is not in the substring', function() {
        assert.equal('hello', stringYak('hello'));
    });

    it('should not return the wrong results for a normal string', function() {
        assert.notEqual('yaky', stringYak('yaky'));
    });

    it('should not return the wrong results for an array of characters', function() {
        assert.notEqual('yaky', stringYak(['y', 'a', 'k', 'y']));
    });
});