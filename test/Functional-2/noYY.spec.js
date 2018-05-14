'use strict'
const expect = require('chai').expect;
function isYY(string) {
    return string.includes('y') || string.includes('Y');
}

function filterYY(givenArray) {
    return givenArray.filter(givenArrayElement => !isYY(givenArrayElement));
}

function addY(givenArray) {
    return filterYY(givenArray)
        .map(givenArrayElement => givenArrayElement+'y');
}

describe('noYY', () => {
    describe('isYY', () => {
        it('should be defined', () => {
            expect(isYY('Y')).to.be.defined;
        });

        it('should return true if the string contains y', () => {
            expect(isYY('aty')).to.equal(true);
        });

        it('should return true if the string contains Y', () => {
            expect(isYY('atY')).to.equal(true);
        });
    });

    describe('filterYY', () => {
        it('should be defined', () => {
            expect(filterYY(['a'])).to.be.defined;
        });
    
        it('should filter out the strings with Y', () => {
            const givenArray = ['aY', 'a', 'bc'];
            const expectedArray = ['a', 'bc'];
    
            expect(filterYY(givenArray)).to.deep.equal(expectedArray);
        });
    
        it('should filter out the strings with y', () => {
            const givenArray = ['ay', 'a', 'bc'];
            const expectedArray = ['a', 'bc'];
    
            expect(filterYY(givenArray)).to.deep.equal(expectedArray);
        });
    
        it('should return the array as it is, if it does not contain neither Y or y', () => {
            const givenArray = ['a', 'bc'];
            const expectedArray = ['a', 'bc'];
    
            expect(filterYY(givenArray)).to.deep.equal(expectedArray);
        });
    });

    it('should be defined', () => {
        expect(addY(['y'])).to.be.defined;
    });

    it('should add a y next to each element', () => {
        expect(addY(['ay', 'a', 'bc', 'byc'])).to.deep.equal(['ay', 'bcy']);
    });

    it('should return an empty array if all the elements in the given array contain a Y or a y', () => {
        expect(addY(['ay', 'yb', 'yc'])).to.deep.equal([]);
    });
});