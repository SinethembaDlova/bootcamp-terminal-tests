module.exports = function totalPhoneBill(log) {
    var phoneActivities = log.split(', ');
    var callList = [];
    var smsList = [];
    var callPrice = 2.75;
    var smsPrice = 0.65;

    for (var x = 0; x < phoneActivities.length; x++) {
        if (phoneActivities[x] === "call") {
            callList.push(phoneActivities[x]);
        }

        if (phoneActivities[x] === "sms") {
            smsList.push(phoneActivities[x]);
        }
    }

    var totalCallPrice = callList.length * callPrice;
    var totalSmsPrice = smsList.length * smsPrice;
    var totalBill = totalCallPrice + totalSmsPrice;

    return totalBill;

}
