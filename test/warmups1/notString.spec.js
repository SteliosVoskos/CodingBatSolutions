var assert = require('assert');
var expect = require('chai').expect;
var notString = require('../../src/warmups1/notString');

describe("Not String", function () {
  it("should define a function called notString", function () {
    expect(notString("hello")).to.be.defined;
  });

  it("should put the not string before the given string, if str doesn't begin with not", function () {
    assert.equal("not equal", notString("equal"));
  });

  it("should not append the not after the given string", function () {
    expect(notString('equal')).to.not.equal("equal not");
  });

  it("should return the raw string if the str param is not", function () {
    assert.equal('not equal', notString('not equal'));
  });

  it("should append the not string before the given string, if str is less than 3 in length", function () {
    assert.equal('not hi', notString('hi'));
  });
});
