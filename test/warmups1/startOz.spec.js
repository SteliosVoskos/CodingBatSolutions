var expect = require('chai').expect;
var assert = require('assert');
var startOz = require('../../src/warmups1/startOz');

describe('startOz', function() {
    it('should be defined', function() {
        expect(startOz('abc')).to.be.defined;
    });

    it('should rerturn oz if the string begins with oz', function() {
        assert.equal('oz', startOz('ozozoz'));
    });

    it('should rerturn o if the string begins with o only', function() {
        assert.equal('o', startOz('oiozoz'));
    });

    it('should rerturn z if the string has z as a second char and the first char should be any other than o', function() {
        assert.equal('z', startOz('izozoz'));
    });

    it('should rerturn the given string if the string doesnt with o or z', function() {
        assert.equal('iiozoz', startOz('iiozoz'));
    });
});