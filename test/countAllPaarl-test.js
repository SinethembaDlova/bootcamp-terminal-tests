const assert = require('assert');
var countAllPaarl = require('../countAllPaarl.js');

describe('countAllPaarl()', function() {
    it('It should dislay the number plates from Paarl', function() {
        assert.equal(countAllPaarl("CA 1244-3444, 2343-34tfJHB, CJ1323-14342, CJ9334-33329, CA SNE"), 2);
    });
    it('It should dislay the number plates from Paarl', function() {
        // this test will fail - can you fix it?
        assert.equal(4, countAllPaarl("CJ 459234, CJ Supreme, CJ 1002523, CA 5221543, CJ Gadaffi, 433-643 JHB"));
    });
});
