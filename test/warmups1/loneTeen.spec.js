var assert = require('assert');
var expect = require('chai').expect;

function loneTeen(a, b) {
    if (typeof a !== 'number' && typeof b !== 'number') {
        return false;
    }
    if ((a >= 13 && a <= 19) && (b >= 13 && b <= 19)) {
        return false;
    }
    return (a >= 13 && a <= 19) || (b >= 13 && b <= 19);
}

describe('loneTeen', function() {
    it('should be defined', function() {
        expect(loneTeen(12, 12)).to.be.defined;
    });

    it('should return true if the first param is between 13 and 19, but the second param is not', function() {
        assert.equal(true, loneTeen(14, 12));
    });

    it('should return true if the first param is 13, but the second param is not between 13 and 19', function() {
        assert.equal(true, loneTeen(13, 12));
    });

    it('should return true if the first param is 19, but the second param is not between 13 and 19', function() {
        assert.equal(true, loneTeen(19, 12));
    });

    it('should return true if the second param is between 13 and 19, but the first param is not', function() {
        assert.equal(true, loneTeen(12, 14));
    });

    it('should return true if the second param is 13, but the first param is not between 13 and 19', function() {
        assert.equal(true, loneTeen(12, 13));
    });

    it('should return true if the second param is 19, but the first param is not between 13 and 19', function() {
        assert.equal(true, loneTeen(12, 19));
    });

    it('should return false if both params are between 13 and 19', function() {
        assert.equal(false, loneTeen(14, 14));
    });

    it('should return false if neither param is between 13 and 19', function() {
        assert.equal(false, loneTeen(12, 12));
    });

    it('should return false if the params are not numbers', function() {
        assert.equal(false, loneTeen('19', '12'));
    });
});