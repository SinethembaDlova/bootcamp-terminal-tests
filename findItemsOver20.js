module.exports = function findItemsOver20(overTwenty) {
    var over20 = [];

    for (var i = 0; i < overTwenty.length; i++) {
        if (overTwenty[i].price > 20) {
            over20.push(overTwenty[i])
        }
    }
    return over20;

}
