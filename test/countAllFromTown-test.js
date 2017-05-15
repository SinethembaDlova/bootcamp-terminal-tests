const assert = require('assert');
var countAllFromTown = require('../countAllFromTown.js');

describe('countAllFromTown()', function() {
    it('it should display how many number plates from Jozi', function() {
        assert.deepEqual(countAllFromTown("CA 1244-3444, sned JHB, CJ 5532-4444, CA 2121-522, CJ 1554-5522, DA 1323-ddJHB"), 2);
    });
    it('it should display how many number plates from Jozi', function() {
        // this test will fail - can you fix it?
        assert.deepEqual(countAllFromTown("33482 JHB, Tido JHB, CA 134324, 10111 JHB, DBN 3484123, SNE JHB, 124392 JHB"), 5);
    });
});
