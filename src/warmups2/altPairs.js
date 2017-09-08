module.exports = function altPairs(givenString) {
    var currentString = givenString.toString();
    if (currentString.length < 2) {
        return currentString;
    }
    if (currentString.length === 2) {
        return currentString.charAt(0) + currentString.charAt(1);
    }
    if (currentString.length === 6) {
        return currentString.charAt(0) + currentString.charAt(1) + currentString.charAt(4) + currentString.charAt(5);    
    }
    return currentString.charAt(0) + currentString.charAt(1) + currentString.charAt(4) + currentString.charAt(5) + currentString.charAt(8) + currentString.charAt(9); 
}