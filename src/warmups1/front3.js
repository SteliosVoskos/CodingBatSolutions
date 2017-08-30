module.exports = function front3(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return '';
    }
    if (str.length === 2 || str.length === 1) {
        return str+str+str;
    }
    return str.substring(0,3)+str.substring(0,3)+str;
}