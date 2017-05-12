module.exports = function yearsAgo(year) {
    var date = new Date();
    var full = date.getFullYear();

    return (full - year) + " years ago";
};
