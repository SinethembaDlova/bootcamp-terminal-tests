const assert = require('assert');
var countRegNumber = require('../countRegNumber.js');

describe('countRegNumber()', function() {
    it('it should display the no. of number plates', function() {
        assert.equal(countRegNumber("CA 45221, 523519 JHB, DBN 5213, CA 55211"), 4);
    });
    it('it should display the no. of number plates', function() {
        // this test will fail - can you fix it?
        assert.equal(3, countRegNumber("CA 182736, CY 523519, CJ 812328"));
    });
});
