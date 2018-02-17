'use strict'
const expect = require('chai').expect;

function noTeen(givenArray) {
  return givenArray.filter(function(givenArrayItem) {
    if (typeof givenArrayItem !== 'number') {
      throw new Error('No strings, chars or objects in noTeen');
    }
    return givenArrayItem < 13 || givenArrayItem > 19;
  });
}

describe("noTeen", function () {
  it("should filter out the numbers between 13 and 19", function () {
    expect(noTeen([1, 2, 13, 15, 17, 20, 29])).to.deep.equal([1, 2, 20, 29]);
  });
  
  it("should return the array as it is if the array doesn't have numbers between 13 and 19", function () {
    expect(noTeen([1, 2, 20, 29])).to.deep.equal([1, 2, 20, 29]);
  });
  
  it("should throw an error if the array contains strings or other chars", function () {
    expect(() => noTeen(['a', 'abc', 1, 2])).to.throw(Error);
  });
});