'use strict'
const expect = require('chai').expect;

function noX(givenArray) {
  if (!givenArray.length) {
    throw new Error('Array must not be empty');
  }
  return givenArray.map(function(givenArrayElement) {
    if (givenArrayElement.indexOf('X') > -1) {
      return givenArrayElement.replace('X', '');
    }
    
    if (givenArrayElement.indexOf('x') > -1) {
      return givenArrayElement.replace('x', '');
    }
    
    return givenArrayElement;
  });
}
describe("noX", function () {
  it("should be defined", function () {
    expect(
      noX(['a'])
    ).to.be.defined;
  });
  
  it("should remove the instances of X from every element in the array", function () {
    expect(
      noX(['Xa', 'aX', 'abcx', 'ab'])
    ).to.deep.equal([
      'a', 'a', 'abc', 'ab'
    ]);
  });
  
  it("should return the array as it is if there are no instances of X or x", function () {
    expect(
      noX(['a', 'b', 'abc', 'ab'])
    ).to.deep.equal([
      'a', 'b', 'abc', 'ab'
    ]);
  });
  
  it("should throw an error if the array is empty", function () {
    expect(() => noX([])).to.throw(Error);
  });
});