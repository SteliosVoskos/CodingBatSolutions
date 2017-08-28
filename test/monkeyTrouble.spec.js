var assert = require('assert');
var expect = require('chai').expect;

function monkeyTrouble(aSmile, bSmile) {
  return aSmile === bSmile;
}

describe("Monkey Trouble", function () {
  it("should be defined", function () {
    expect(monkeyTrouble(true, true)).to.be.defined;
  });

  it("should return true if both monkeys are smiling", function () {
    assert.equal(true, monkeyTrouble(true, true));
  });

  it("should return true if none is smiling", function () {
    assert.equal(true, monkeyTrouble(false, false));
  });

  it("should return false if aSmile is smiling", function () {
    assert.equal(false, monkeyTrouble(true, false));
  });

  it("should return false if bSmile is smiling", function () {
    assert.equal(false, monkeyTrouble(false, true));
  });
});
