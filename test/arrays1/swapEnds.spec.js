var assert = require('assert');
var expect = require('chai').expect;
var swapEnds = require('../../src/arrays1/swapEnds');

describe("swapEnds", function () {
  it("should be defined", function () {
    expect(swapEnds([1, 2, 3, 4])).to.be.defined;
  });

  it("should return a new array with the first and last elements swaped", function () {
    assert.deepEqual([4, 2, 3, 1], swapEnds([1, 2, 3, 4]));
  });
});
