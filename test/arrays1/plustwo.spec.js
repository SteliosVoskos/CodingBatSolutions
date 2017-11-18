var assert = require('assert');
var expect = require('chai').expect;
var plusTwo = require('../../src/arrays1/plusTwo');

describe("plusTwo", function () {
  it("should be defined", function () {
    expect(plusTwo([1, 2], [3, 4])).to.be.defined;
  });

  it("should concadenate the two arrays only if the arrays are of length 2", function () {
    assert.deepEqual([1, 2, 3, 4], plusTwo([1, 2], [3, 4]));
  });

  it("should return the empty array if one or both arrays are not of length 2", function () {
    assert.deepEqual([], plusTwo([1, 2], [3, 4, 5]));
  });

  it("should concadenate the two arrays", function () {
    assert.deepEqual([1, 2, 3, 4], plusTwo([1, 2], [3, 4]));
  });
});
