module.exports = function swapEnds(givenArray) {
  return new Array(givenArray[givenArray.length - 1], givenArray[1], givenArray[2], givenArray[0]);
}
