// WARNING: Singleton instance - don't store state

/* **
    Library for manipulating strings
    TODO: Make it manipulate the String prototype to add this with a safe method to just
    return it as a seperate instance
 */
function StringUtils() {
    if (!(this instanceof StringUtils))
        return new StringUtils();
}

/* **
    Pads the left side of the string with value up to padding characters
 */
StringUtils.prototype.padLeft = function (value, padding) {
    padding = padding || 7;

    value = String(value);

    if (value.length > padding)
        return value;

    var padstr = "";
    for (var i = 0; i < padding; i++)
        padstr+= " ";

    return (padstr + value).slice(-padstr.length);
};

/* **
    Pads the right side of the string with value up to padding characters
 */
StringUtils.prototype.padRight = function (value, padding) {
    padding = padding || 7;

    value = String(value);

    if (value.length > padding)
        return value;

    var diff = padding - value.length;

    var padstr = "";
    for (var i = 0; i < diff; i++)
        padstr+= " ";

    return (value + padstr);
};

module.exports = new StringUtils();
