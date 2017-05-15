const assert = require('assert');
var isWeekDay = require('../isWeekDay.js');

describe('isWeekDay()', function() {
    it('it should display the week day', function() {
        assert.equal(isWeekDay("Thursday"), false);
    });
    it('it should display the week day', function() {
        assert.equal(false, isWeekDay("Friday"));
    });
});
