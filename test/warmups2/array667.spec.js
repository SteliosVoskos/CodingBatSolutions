var assert = require('assert');
var expect = require('chai').expect;
var array667 = require('../../src/warmups2/array667');

describe("array667", function() {
    it('should be defined', function() {
        expect(array667([1, 2])).to.be.defined;
    });

    it('should return the number of times that it encountered the the number 6 two times in a row', function() {
        assert.equal(1, array667([6, 6, 4]));
    });

    it('should return the number of times that it encountered the the number 6, followed by number 7', function() {
        assert.equal(1, array667([6, 7, 4]));
    });

    it('should still return the correct result if the given input is a string of numbers', function() {
        assert.equal(2, array667('667'))
    });
});