module.exports = function countAllPaarl(regNum) {

    var storeList = regNum.split(", ");
    var paarlPlates = [];

    for (var i = 0; i < storeList.length; i++) {

        if (storeList[i].startsWith('CJ')) {
            paarlPlates.push(storeList[i]);
        }
    }

    return paarlPlates.length;
};
