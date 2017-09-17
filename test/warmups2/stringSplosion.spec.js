var assert = require('assert');
var expect = require('chai').expect;
var stringSplosion = require('../../src/warmups2/stringSplosion');

describe('stringSplosion', function() {
    it('should be defined', function() {
        expect(stringSplosion('123')).to.be.defined;
    });

    it('should construct the new string', function() {
        assert.equal('CCoCodCode', stringSplosion('Code'));
    });
});