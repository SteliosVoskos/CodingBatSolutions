var assert = require('assert');
var expect = require('chai').expect;
var icyHot = require('../../src/warmups1/icyHot');

describe("icyHot", function () {
    it("should define a function called icyHot", function () {
        expect(icyHot(1, 1)).to.be.defined;
    });

    it("should return true if the first param is above 100 and the second param less than 0", function() {
        assert.equal(true, icyHot(120, -2));
    });

    it("should return true if the first param is less than 0 and the second param is above 100", function() {
        assert.equal(true, icyHot(-2, 120));
    });

    it("should return false if the first param and the second param are greater than 0", function() {
        assert.equal(false, icyHot(10, 120));
    });

    it("should return false if the first param and the second param are less than 0", function() {
        assert.equal(false, icyHot(-2, -2));
    });

    it("should return false if the first param and the second param are greater than 100", function() {
        assert.equal(false, icyHot(130, 120));
    });
});