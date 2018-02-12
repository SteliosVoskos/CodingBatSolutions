'use strict'
const expect = require('chai').expect;

function lower(givenArray) {
  if (!givenArray.length) {
    throw new Error('Array must not be empty');
  }
  return givenArray.map(function(givenArrayElement) {
    return givenArrayElement.toLowerCase();
  });
}
describe("lower", function () {
  it("should be defined", function () {
    expect(lower(['A', 'B'])).to.be.defined;
  });
  
  it("should lowercase all elements in the array", function () {
    expect(lower(['A', 'Abc', 'b', 'AbC']))
      .to.deep.equal([
        'a', 'abc', 'b', 'abc'
      ]);
  });
  
  it("should throw an error if the array is empty", function () {
    expect(() => lower([])).to.throw(Error);
  });
});