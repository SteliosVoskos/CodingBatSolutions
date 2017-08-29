var assert = require('assert');
var expect = require('chai').expect;

function sleepIn(weekday, vacation) {
  return !weekday || vacation;
};

describe("Sleep In", function () {
  it("should be defined", function () {
    expect(sleepIn(true, true)).to.be.defined;
  });

  it("should return true when weekday is false and vacation is true", function () {
    assert.equal(true, sleepIn(false, true));
  });

  it("should return false when weekday is true and vacation is false", function () {
    assert.equal(false, sleepIn(true, false));
  });
});
