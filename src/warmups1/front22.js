module.exports = function front22(str) {
    if (!str.length) {
        return '';
    }
    if (str.length === 1) {
        return str+str+str;
    }
    return str.substring(0,2)+str+str.substring(0,2);
}