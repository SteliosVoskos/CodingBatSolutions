'use strict'
var convertStringToArray = require('../helpers/convertStringToArray');

function isArrayContainingChars(givenArray) {
  const sanitisedArray = givenArray.map(function(givenArrayItem) {
      if (isNaN(givenArrayItem)) {
          return false;
      }

      return givenArrayItem;
  });

  return sanitisedArray.indexOf(false) > -1;
}

module.exports = function maxEnd3(givenArray) {
  if (typeof givenArray !== 'string') {
    if (givenArray[0] === givenArray[givenArray.length - 1] || givenArray.length < 3 || isArrayContainingChars(givenArray)) {
      return givenArray;
    }
  } else if (typeof givenArray === 'string') {
    const sanitisedArray = convertStringToArray(givenArray);
    if (sanitisedArray[0] < sanitisedArray[sanitisedArray.length - 1]) {
      return sanitisedArray.reduce(function(acc, el) {
        el = sanitisedArray[sanitisedArray.length - 1];
        return acc.concat(el);
      }, []);
    }
    if (sanitisedArray[0] > sanitisedArray[sanitisedArray.length - 1]) {
      return sanitisedArray.reduce(function(acc, el) {
        el = sanitisedArray[0];
        return acc.concat(el);
      }, []);
    }
  }
  if (givenArray[0] > givenArray[givenArray.length - 1]) {
    return givenArray.reduce(function(acc, el) {
      el = givenArray[0];
      return acc.concat(el);
    }, []);
  }
  if (givenArray[0] < givenArray[givenArray.length - 1]) {
    return givenArray.reduce(function(acc, el) {
      el = givenArray[givenArray.length - 1];
      return acc.concat(el);
    }, []);
  }
}
