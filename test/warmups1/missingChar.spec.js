var assert = require('assert');
var expect = require('chai').expect;
var missingChar = require('../../src/warmups1/missingChar');

describe("Missing Char", function () {
  it("should define a function called missingChar", function () {
    expect(missingChar("Hello", 1)).to.be.defined;
  });

  it("should remove the character from the string at the specified index", function () {
    assert.equal("Hllo", missingChar("Hello", 1));
  });

  it("should return the raw string if the index is bigger than the length of the string", function () {
    assert.equal('Hello', missingChar('Hello', 8));
  });
});
