var assert = require('assert');
var expect = require('chai').expect;

function front3(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return '';
    }
    if (str.length === 2 || str.length === 1) {
        return str+str+str;
    }
    return str.substring(0,3)+str.substring(0,3)+str;
}

describe('front3', function() {
    it('should be defined', function() {
        expect(front3('ab')).to.be.defined;
    });

    it('should print the first 3 characters two times in the back of the string', function() {
        assert.equal('abcabcabcd', front3('abcd'));
    });

    it('should print the first 2 characters two times in the back of the string, if str is of length 2', function() {
        assert.equal('ababab', front3('ab'));
    });

    it('should print the first character two times in the back of the string, if str is of length 1', function() {
        assert.equal('aaa', front3('a'));
    });

    it('should print the empty string, if str is of length 0', function() {
        assert.equal('', front3(''));
    });

    it('should print the empty string, if the parameter is not a string', function() {
        assert.equal('', front3(123));
    });
});