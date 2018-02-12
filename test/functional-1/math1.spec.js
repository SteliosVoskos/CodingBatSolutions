'use strict'
const expect = require('chai').expect;
const sanitisedArray = require('../../src/helpers/sanitisedArray');

function math1(givenArray) {
  const sanitised = sanitisedArray(givenArray);
  
  if (!givenArray.length) {
    throw new Error('The array must not be empty');
  }
  
  if (sanitised.indexOf(false) > -1) {
    throw new Error('The array should contain just intengers');
  }
  
  return givenArray.map(function(givenArrayElement) {
    return (givenArrayElement + 1) * 10;
  });
}
describe("math1", function () {
  it("should be defined", function () {
    expect(math1([1])).to.be.defined;
  });
  
  it("should throw an error if there are strings in the array", function () {
    expect(() => math1(['a', 1])).to.throw(Error);
  });
  
  it("should throw an error if the array is empty", function () {
    expect(() => math1([])).to.throw(Error);
  });
  
  it("should add 1 to each number and the multiply the result by 10 (2 -> 30)", function () {
    expect(math1([1, 2, 3, 4])).to.deep.equal([
      20, 30, 40, 50
    ]);
  });
});