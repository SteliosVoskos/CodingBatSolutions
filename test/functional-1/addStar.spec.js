'use strict'
const expect = require('chai').expect;

function addStar(givenArray) {
    return givenArray.map(function(givenArrayElement) {
        return `${givenArrayElement}*`;
    });
}
describe('addStar', () => {
    it('should be defined', () => {
        expect(
            addStar([1, 2, 3])
        ).to.be.defined;
    });
    it('should add a star at the end of every array element', () => {
        expect(
            addStar([1, 2, 3])
        ).to.deep.equal(
            ['1*', '2*', '3*']
        );
    });
    it('should not add a star at the beginning of every array element', () => {
        expect(
            addStar([1, 2, 3])
        ).to.not.deep.equal(
            ['*1', '*2', '*3']
        );
    });
    it('should allow alpha characters', () => {
        expect(
            addStar(['a', 'b', 'c'])
        ).to.deep.equal(
            ['a*', 'b*', 'c*']
        );
    });
    it('should allow special characters', () => {
        expect(
            addStar(['*', '$', '@'])
        ).to.deep.equal(
            ['**', '$*', '@*']
        );
    });
});