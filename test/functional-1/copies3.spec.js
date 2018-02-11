'use strict'
const expect = require('chai').expect;

function copies3(givenArray) {
  if (!givenArray.length) {
    throw new Error('Dont provide empty array to this function');
  }
  
  return givenArray.map(function(givenArrayElement) {
    if (typeof givenArrayElement === 'number') {
      return givenArrayElement.toString()
      .concat(givenArrayElement)
      .concat(givenArrayElement); 
    }
    return givenArrayElement
    .concat(givenArrayElement)
    .concat(givenArrayElement);
  })
}
describe("copies3", () => {
  it("should be defined", function () {
    expect(copies3(['a', 'b', 'c'])).to.be.defined;
  });
  
  it("should throw an error if the input is an empty array", function () {
    expect(() => copies3([])).to.throw(Error);
  });
  
  it("should repeat three times every element", function () {
    expect(copies3(['a', '11', '*'])).to.deep.equal([
      'aaa', '111111', '***'
    ]);
  });
  
  it('should convert all numbers in the array to strings and return the expected result', () => {
    expect(copies3([1, 2, 3])).to.deep.equal([
      '111', '222', '333'
    ]);
  });
});