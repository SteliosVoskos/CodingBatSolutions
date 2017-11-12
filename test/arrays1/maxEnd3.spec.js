var assert = require('assert');
var expect = require('chai').expect;
var maxEnd3 = require('../../src/arrays1/maxEnd3');

describe("maxEnd3", function () {
  it("should be defined", function () {
    expect(maxEnd3([1, 2, 3])).to.be.defined;
  });

  it("should return an array where all the elements assigned to the first element, if the first element is bigger than the last one", function () {
    const givenArray = [4, 2, 3];
    const expectedArray = [4, 4, 4];

    assert.deepEqual(expectedArray, maxEnd3(givenArray));
  });

  it("should return an array where all the elements assigned to the last element, if the last element is bigger than the first one", function () {
    const givenArray = [1, 2, 4];
    const expectedArray = [4, 4, 4];

    assert.deepEqual(expectedArray, maxEnd3(givenArray));
  });

  it("should return the array as it is if the first and last elements are equal", function () {
    const givenArray = [4, 2, 4];
    const expectedArray = [4, 2, 4];

    assert.deepEqual(expectedArray, maxEnd3(givenArray));
  });

  it("should return the array as it is if the array has length less than 3", function () {
    const givenArray = [4, 2];
    const expectedArray = [4, 2];

    assert.deepEqual(expectedArray, maxEnd3(givenArray));
  });

  it("should return the array as it is if the array contains strings or characters", function () {
    const givenArray = [4, 'a', 2];
    const expectedArray = [4, 'a', 2];

    assert.deepEqual(expectedArray, maxEnd3(givenArray));
  });

  it("should still return the right result, if the givenArray is finally a string of numbers (i.e '12345') [case 1]", function () {
    const givenArray = '425';
    const expectedArray = [5, 5, 5];

    assert.deepEqual(expectedArray, maxEnd3(givenArray));
  });

  it("should still return the right result, if the givenArray is finally a string of numbers (i.e '12345') [case 2]", function () {
    const givenArray = '725';
    const expectedArray = [7, 7, 7];

    assert.deepEqual(expectedArray, maxEnd3(givenArray));
  });
});
