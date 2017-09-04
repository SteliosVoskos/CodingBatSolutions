var assert = require('assert');
var expect = require('chai').expect;
var makes10 = require('../../src/warmups1/makes10');

describe("Makes 10", function () {
  it("should define a function called makes10", function () {
    expect(makes10(1,9)).to.be.defined;
  });

  it("should return true if a is 10 and b is not", function () {
    assert.equal(true, makes10(10, 1));
  });

  it("should return true if b is 10 and a is not", function () {
    assert.equal(true, makes10(1, 10));
  });

  it("should return true if the two numbers sum up to 10", function () {
    assert.equal(true, makes10(5, 5));
  });

  it("should return false if the numbers don't sum up to 10 and neither of them is the number 10", function () {
    assert.equal(false, makes10(2, 4));
  });

  it("should return true if both parameters are the number 10", function () {
    assert.equal(true, makes10(10, 10));
  });
});
