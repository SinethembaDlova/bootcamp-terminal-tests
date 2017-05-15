const assert = require('assert');
var regCheck = require('../regCheck.js');

describe('regCheck()', function() {
    it('it should display which location is the car plate from', function() {
        assert.equal(regCheck('522 422 DBN', 'DBN'), true);
    });
    it('it should display which location is the car plate from', function() {
        // this test will fail - can you fix it?
        assert.equal(true, regCheck('DV 23 NB GP', 'GP'));
    });
});
