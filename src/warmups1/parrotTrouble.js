module.exports = function parrotTrouble(talking, hour) {
    return talking && (hour >= 0 && hour <= 6);
}