const assert = require('assert');
var isFromBellville = require('../isFromBellville.js');

describe('isFromBellville()', function() {
    it('it should display all the correct bellville number plates', function() {
        assert.equal(isFromBellville("CY 1232 2233"), true);
    });
    it('It should be false because the number is not from bellville', function() {
        // this test will fail - can you fix it?
        assert.equal(false, isFromBellville("CA 551 325"));
    });
});
