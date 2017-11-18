module.exports = function plusTwo(firstGivenArray, secondGivenArray) {
  if (firstGivenArray.length !== 2 || secondGivenArray.length !== 2) {
    return [];
  }
  return firstGivenArray.concat(secondGivenArray);
}
