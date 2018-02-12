'use strict'
const expect = require('chai').expect;
const convertStringToArray = require('../../src/helpers/convertStringToArray');

function rightDigit(givenArray) {
  return givenArray.map(function(givenArrayElement) {
    if (givenArrayElement < 0) {
      throw new Error('Only positive numbers are allowed');
    }
    const stringElement = givenArrayElement.toString();
    const array = convertStringToArray(stringElement);
    return Number(array[array.length - 1]);
  });
}
describe("rightDigit", function () {
  it("should be defined", function () {
    expect(rightDigit([1, 12, 123])).to.be.defined;
  });
  
  it("should return the right most digit of each number", function () {
    expect(rightDigit([1, 12, 123])).to.deep.equal([1, 2, 3]);
  });
  
  it("should throw an error if the input contains negative integers", function () {
    expect(() => rightDigit([-1, -2])).to.throw(Error);
  });
});