var assert = require('assert');
var expect = require('chai').expect;
var sumDouble = require('../../src/warmups1/sumDouble');

describe("Sum Double", function () {
  it("should define a function called sumDouble", function () {
    expect(sumDouble(1,2)).to.be.defined;
  });

  it("should return the sum of two distinct numbers", function () {
    assert.equal(4, sumDouble(1,3));
  });

  it("should return doubled the sum of two identical number", function () {
    assert.equal(8, sumDouble(2,2));
  });
});
