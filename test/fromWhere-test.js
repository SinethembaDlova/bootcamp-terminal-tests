const assert = require('assert');
var fromWhere = require('../fromWhere.js');

describe('fromWhere()', function() {
    it('it should say the car is from Cape Town ', function() {
        assert.equal(fromWhere("CA 1256-4366"), "Cape Town");
    });
    it('it should display the plate is from other place', function() {
        // this test will fail - can you fix it?
        assert.equal(fromWhere("DT 1256-4366 JHB"), "Some other place!");
    });
});
