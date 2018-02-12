'use strict'
const expect = require('chai').expect;
const sanitisedArray = require('../../src/helpers/sanitisedArray');

function noNeg(givenArray) {
  if (!givenArray.length) {
    throw new Error('Array must not be empty');
  }
  
  if (sanitisedArray(givenArray).indexOf(false) > -1) {
    throw new Error('Array must contain only numbers');
  }
  
  return givenArray.filter(givenArrayElement => givenArrayElement >= 0);
}
describe("noNeg", function () {
  it("should be defined", function () {
    expect(noNeg([-1, 0])).to.be.defined;
  });
  
  it("should throw an error if the array is empty", function () {
    expect(() => noNeg([])).to.throw(Error);
  });
  
  it("should throw an error if the array contains strings/chars/objects", function () {
    expect(() => noNeg(['omonoia'])).to.throw(Error);
  });
  
  it("should filter out the negative values", function () {
    expect(noNeg([-9, 0, 1, -2])).to.deep.equal([0, 1]);
  });
});