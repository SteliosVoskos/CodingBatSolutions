var assert = require('assert');
var expect = require('chai').expect;
var frontBack = require('../../src/warmups1/frontBack');

describe("Front Back", function () {
  it("should define a function called frontBack()", function () {
    expect(frontBack('Hello')).to.be.defined;
  });

  it("should return the raw string if the length of string is equal to 1", function () {
    assert.equal('H', frontBack('H'));
  });

  it("should return the empty string if the length of string is 0", function () {
    assert.equal('', frontBack(''));
  });

  it("should append the last character at the beginning and the first at the end", function () {
    assert.equal('oellH', frontBack('Hello'));
  });
});
