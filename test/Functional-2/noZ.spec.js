'use strict'
const expect = require('chai').expect;

function isZ(string) {
    return string.includes('z') || string.includes('Z');
}

function noZ(givenArray) {
    return givenArray.filter(givenArrayElement => !isZ(givenArrayElement));
}

describe('isZ', () => {
    describe('isZ', () => {
        it('should be defined', () => {
            expect(isZ('z')).to.be.defined;
        });

        it('should return true if the string contains z', () => {
            expect(isZ('atyz')).to.equal(true);
        });

        it('should return true if the string contains Z', () => {
            expect(isZ('atZ')).to.equal(true);
        });
    });

    describe('noZ', () => {
        it('should be defined', () => {
            expect(noZ(['a'])).to.be.defined;
        });
    
        it('should filter out the strings with Z', () => {
            const givenArray = ['aZ', 'a', 'bc'];
            const expectedArray = ['a', 'bc'];
    
            expect(noZ(givenArray)).to.deep.equal(expectedArray);
        });
    
        it('should filter out the strings with z', () => {
            const givenArray = ['az', 'a', 'bc'];
            const expectedArray = ['a', 'bc'];
    
            expect(noZ(givenArray)).to.deep.equal(expectedArray);
        });
    
        it('should return the array as it is, if it does not contain neither z or Z', () => {
            const givenArray = ['a', 'bc'];
            const expectedArray = ['a', 'bc'];
    
            expect(noZ(givenArray)).to.deep.equal(expectedArray);
        });
    });
});