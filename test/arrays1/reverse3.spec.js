var assert = require('assert');
var expect = require('chai').expect;
var reverse3 = require('../../src/arrays1/reverse3');

describe("reverse3", function () {
  it("should be defined", function () {
    expect(reverse3([1, 2])).to.be.defined;
  });

  it("should reverse an array of 3 items", function () {
    assert.deepEqual([3, 2, 1], reverse3([1, 2, 3]));
  });

  it("should still return the tight result if the input is a string with length 3", function () {
    assert.deepEqual(['c', 'b', 'a'], reverse3('abc'));
  });

  it("should return the string as it is, if the string has length less than 3", function () {
    assert.deepEqual('ab', reverse3('ab'));
  });

  it("should return the empty string, if the string has length 0", function () {
    assert.deepEqual('', reverse3(''));
  });

  it("should return the array as it is, if the array has length less than 3", function () {
    assert.deepEqual([1, 2], reverse3([1, 2]));
  });

  it("should return the empty array, if the array has length 0", function () {
    assert.deepEqual([], reverse3([]));
  });
});
