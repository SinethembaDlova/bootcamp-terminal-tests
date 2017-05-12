module.exports = function countAllFromTown(regNum) {
    var storeList = regNum.split(', ');
    var fromJHB = [];

    for (var i = 0; i < storeList.length; i++) {
        if (storeList[i].endsWith("JHB")) {
            fromJHB.push(storeList[i]);
        }
    }
    return fromJHB.length;
}
