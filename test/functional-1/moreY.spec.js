'use strict'
const expect = require('chai').expect;

function moreY(givenArray) {
  if (!givenArray.length) {
    throw new Error('no empty arrays');
  }
  
  return givenArray.map(function(givenArrayElement) {
    return `y${givenArrayElement}y`;
  })
}
describe("moreY", function () {
  it("should be defined", function () {
    expect(moreY(['1'])).to.be.defined;
  });
  
  it("should throw an error if the array is empty", function () {
    expect(() => moreY([])).to.throw(Error);
  });
  
  it('should convert all numbers in the array to strings and return the expected result', () => {
    expect(moreY([1, 2, 3])).to.deep.equal([
      'y1y', 'y2y', 'y3y'
    ]);
  });
  
  it('should add y at the begining and the end of the array element', function() {
    expect(moreY([1, 'a', '*'])).to.deep.equal([
      'y1y', 'yay', 'y*y'
    ]);
  });
});