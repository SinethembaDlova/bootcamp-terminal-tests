module.exports = function findItemsOver(items, threshold) {
    var over20 = [];

    for (var i = 0; i < items.length; i++) {
        if (items[i].price > threshold) {
            over20.push(items[i]);
        }
    }
    return over20;
}
