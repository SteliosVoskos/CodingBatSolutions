module.exports = function middleWay(firstGivenArray, secondGivenArray) {
  if (firstGivenArray.length % 3 === 0 && secondGivenArray.length % 3 === 0) {
    return new Array(firstGivenArray[(firstGivenArray.length -1) / 2], secondGivenArray[(secondGivenArray.length - 1) / 2]);
  }

  return [];
}
