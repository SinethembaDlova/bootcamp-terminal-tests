const assert = require('assert');
var totalPhoneBill = require('../totalPhoneBill.js');

describe('totalPhoneBill()', function() {
    it('it should display the total phone bill.', function() {
        assert.equal(totalPhoneBill("call, sms, call, sms, sms"), 7.45);
    });
    it('it should display the total phone bill.', function() {
        // this test will fail - can you fix it?
        assert.equal(12.3, totalPhoneBill("call, call, call, sms, call, sms"));
    });
});
