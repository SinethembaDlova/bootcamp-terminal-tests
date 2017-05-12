module.exports = function regCheck(regPlate, location) {
    var isFrom = regPlate.endsWith(location);
    return isFrom;

};
