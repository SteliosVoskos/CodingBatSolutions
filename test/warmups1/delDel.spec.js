var assert = require('assert');
var expect = require('chai').expect;
var delDel = require('../../src/warmups1/delDel');

describe('delDel', function() {
    it('should be defined', function() {
        expect(delDel('abc')).to.be.defined;
    });

    it('should delete del in a text if del occurs in the first index', function() {
        assert.equal('aabc', delDel('adelabc'));
    });

    it('should return the givenString unchanged if the string does not include del at the first index', function() {
        assert.equal('abc', delDel('abc'));
    })
});