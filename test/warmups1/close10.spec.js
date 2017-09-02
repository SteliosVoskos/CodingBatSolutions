var assert = require('assert');
var expect = require('chai').expect;
var close10 = require('../../src/warmups1/close10');

describe('close10', function() {
    it('should be defined', function() {
        expect(close10(1, 1)).to.be.defined;
    });

    it('should return the first param if the first param is closer to 10 than the second one', function() {
        assert.equal(9, close10(9, 7));
    });

    it('should return the second param if the second param is closer to 10 than the first one', function() {
        assert.equal(9, close10(7, 9));
    });

    it('should handle negative numbers and return the first param if the first param is closer to 10 than the second one', function() {
        assert.equal(9, close10(-9, 7));
    });

    it('should handle negative numbers and return the second param if the second param is closer to 10 than the first one', function() {
        assert.equal(9, close10(7, -9));
    });

    it('should still return the correct result if the given params are strings', function() {
        assert.equal(9, close10('7', '9'));
    });

    it('should return 0 if it is a tie', function() {
        assert.equal(0, close10(9, 9));
    });
});