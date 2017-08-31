var expect = require('chai').expect;
var convertStringToArray = require('../../src/helpers/convertStringToArray');

describe('convertStringToArray', function() {
    it('should be defined', function() {
        expect(convertStringToArray('string')).to.be.defined;
    });

    it('should return the empty array if the given string is empty', function() {
        expect(convertStringToArray('')).to.deep.equal([]);
    });

    it('should always convert the string to an array if the given string is not null', function() {
        expect(convertStringToArray('123')).to.deep.equal(['1', '2', '3']);
    });

    it('should convert the input to a string if the input is a number', function() {
        expect(convertStringToArray(123)).to.deep.equal(['1', '2', '3']);
    })
});