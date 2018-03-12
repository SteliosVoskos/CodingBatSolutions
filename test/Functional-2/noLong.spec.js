'use strict'
const expect = require('chai').expect;

const noLong = (givenArray) => {
  return givenArray.filter(givenArrayItem => givenArrayItem.length < 4);
} 
describe("noLong", function () {
  it("should return the strings that are not longer than 4 in length", function () {
    expect(noLong(['abcd', 'abc', 'abcdabcd', 'ab'])).to.deep.equal(['abc', 'ab']);
  });
  
  it("should return the array as it is, if the array has elements with length less than 4", function () {
    expect(noLong(['abc', 'abc', 'a', 'ab'])).to.deep.equal(['abc', 'abc', 'a', 'ab']);
  });
});