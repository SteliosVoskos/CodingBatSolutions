'use strict'
const assert = require('assert');
const expect = require('chai').expect;
var posNeg = require('../../src/warmups1/posNeg');

describe("Pos Neg", () => {
  it("should define a function called posNeg", () => {
    expect(posNeg(-1, -1, true)).to.be.defined;
  });

  it("should return true if a is negative and b is negative, given that negative is true", () => {
    assert.equal(true, posNeg(-1, -1, true))
  });

  it("should return false if a is negative and b is negative, given that negative is false", () => {
    assert.equal(false, posNeg(-1, -1, false))
  });

  it("should return true if a is positive and b is negative, given that negative is false", () => {
    assert.equal(true, posNeg(1, -1, false))
  });

  it("should return true if a is negative and b is positive, given that negative is false", () => {
    assert.equal(true, posNeg(-1, 1, false));
  });

  it("should return false if a is negative and b is positive, given that negative is true", () => {
    assert.equal(false, posNeg(-1, 1, true));
  });

  it("should return false if a is positive and b is negative, given that negative is true", () => {
    assert.equal(false, posNeg(1, -1, true))
  });
});
