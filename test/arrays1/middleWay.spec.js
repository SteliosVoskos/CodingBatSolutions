var assert = require('assert');
var expect = require('chai').expect;
var middleWay = require('../../src/arrays1/middleWay');

describe("middleWay", function () {
  it("should be defined", function () {
    expect(middleWay([1, 2, 3], [1, 2, 3])).to.be.defined;
  });

  it("should return the middle elements if the arrays are of odd length", function () {
    assert.deepEqual([1, 1], middleWay([1, 1, 2], [5, 1, 8]));
  });

  it("should return the empty array, if one or both arrays are of even length", function () {
    assert.deepEqual([], middleWay([1, 1, 2], [5, 1, 8, 2]));
  });

  it("should still return the right result if the inputs are in the format of a string", function () {
    assert.deepEqual([1, 1], middleWay('112', '518'));
  });
});
