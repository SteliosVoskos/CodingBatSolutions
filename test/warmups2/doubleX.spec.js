var expect = require('chai').expect;
var assert = require('assert');
var doubleX = require('../../src/warmups2/doubleX');

describe('doubleX', function() {
    it('should be defined', function() {
        expect(doubleX('aaa')).to.be.defined;
    });

    it('should return true if the string contains two consequtuve xx', function() {
        assert.equal(true, doubleX('axxbc'));
    });

    it('should return false if the string doesnt have two consequtive xx', function() {
        assert.equal(false, doubleX('abc'));
    });

    it('should return false if the string is empty', function() {
        assert.equal(false, doubleX(''));
    });
});