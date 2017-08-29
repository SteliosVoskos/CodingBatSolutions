var assert = require('assert');
var expect = require('chai').expect;

function near100(n) {
  return Math.abs(n - 100) <= 10 || Math.abs(n - 200) <= 10;
}

describe("Near 100", function () {
  it("should define a function called near100", function () {
    expect(near100(90)).to.be.defined;
  });

  it("should return true if the difference between n and 100 is between 0 and 10", function () {
    assert.equal(true, near100(95));
  });

  it("should return false if the difference between n and 100 is not between 0 and 10", function () {
    assert.equal(false, near100(85));
  });

  it("should return true if the difference between n and 100 is 0", function () {
    assert.equal(true, near100(100));
  });

  it("should return true if the difference between n and 200 is between 0 and 10", function () {
    assert.equal(true, near100(195));
  });

  it("should return false if the difference between n and 200 is not between 0 and 10", function () {
    assert.equal(false, near100(185));
  });

  it("should return true if the difference between n and 200 is 0", function () {
    assert.equal(true, near100(200));
  });
});
