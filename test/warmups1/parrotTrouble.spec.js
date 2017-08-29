var assert = require('assert');
var expect = require('chai').expect;

function parrotTrouble(talking, hour) {
  return talking && (hour >= 0 && hour <= 6);
}

describe("Parrot Trouble", function () {
  it("should define a function called parrotTrouble", function () {
    expect(parrotTrouble(false, 7)).to.be.defined;
  });

  it("should return true if the parrot is talking and the hour is less than 7", function () {
    assert.equal(true, parrotTrouble(true, 4));
  });

  it("should return false if the parrot is not talking and the hour is less than 7", function () {
    assert.equal(false, parrotTrouble(false, 4));
  });

  it("should return true if the parrot is not talking and the hour is bigger than 20", function () {
    assert.equal(false, parrotTrouble(false, 21));
  });

  it("should return false if the parrot is not talking and the hour is between 0 and 6", function () {
    assert.equal(false, parrotTrouble(false, 4));
  });
});
