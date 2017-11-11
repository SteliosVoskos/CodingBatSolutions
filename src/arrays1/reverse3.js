'use strict'
var convertStringToArray = require('../helpers/convertStringToArray');
module.exports = function reverse3(givenArray) {
  if (givenArray.length < 3) {
    return givenArray;
  }

  if (typeof givenArray === 'string') {
    let sanitisedArray = convertStringToArray(givenArray);
    return sanitisedArray.reduceRight(function(array, lastElement) {
      return array.concat(lastElement);
    }, []);
  }

  return givenArray.reduceRight(function(array, lastElement) {
    return array.concat(lastElement);
  }, []);
}
