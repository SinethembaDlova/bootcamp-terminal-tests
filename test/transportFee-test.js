const assert = require('assert');
var transportFee = require('../transportFee.js');

describe('transportFee()', function() {
    it('it should display how much transport fee is in the morning', function() {
        assert.equal(transportFee("morning"), "R20");
    });

    it('it should display how much transport fee is in the afternoon', function() {
        // this test will fail - can you fix it?
        assert.equal(transportFee("afternoon"), "R10, work will cover your transport back home.");
    });

    it('it should display how much transport fee is at night', function() {
        // this test will fail - can you fix it?
        assert.equal(transportFee("night"), "Your transport is free, you're covered.");
    });
});
