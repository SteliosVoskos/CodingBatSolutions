var assert = require('assert');
var expect = require('chai').expect;

function no9(givenArray) {
    var sanitisedArray = givenArray.map(function(givenArrayItem) {
        if (isNaN(givenArrayItem)) {
            return false;
        }

        return givenArrayItem;
    });

    if (sanitisedArray.indexOf(false) > -1) {
        return false;
    }
    return sanitisedArray.map(function(sanitisedArrayItem) {
        const stringArrayItem = sanitisedArrayItem.toString();
        if (stringArrayItem.indexOf('9') > -1) {
            return Number(stringArrayItem.replace('9', ''));
        }
        return sanitisedArrayItem;
    });
}

describe("no9", function () {
    it("should be defined", function() {
        expect(no9([9, 1, 0])).to.be.defined;
    });

    it("should filter out the number 9 from the given array", function () {
        assert.deepEqual([1, 2, 3], no9([19, 29, 39]));
    });

    it("should not filter out the number and return false if the elements contain alpha characters", function () {
        assert.deepEqual(false, no9(['a9', 'b9', 2]));
    });

    it("should return the array as it is if the elements do not contain a 9", function () {
        assert.deepEqual([1, 2, 3], no9([1, 2, 3]));
    });

    it("should return the array with 0 in place of 9 if 9 appears in a 1-digit element", function () {
        assert.deepEqual([7, 8, 0, 10], no9([7, 8, 9, 10]));
    });
});
