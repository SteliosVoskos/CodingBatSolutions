var assert = require('assert');
var expect = require('chai').expect;

function diff21(n) {
  return n > 21 ? 2 * (n - 21) : Math.abs(n - 21);
}
describe("Diff 21", function () {
  it("should define a function called diff21", function () {
    expect(diff21(15)).to.be.defined;
  });

  it("should return the difference between n and 21 if n is less than or equal to 21", function () {
    assert.equal(16, diff21(5));
  });

  it("should still return the difference if n is negative", function () {
    assert.equal(25, diff21(-4))
  });

  it("should return doubled the difference between n and 21 if n is greater than 21", function () {
    assert.equal(6, diff21(24));
  });
});
