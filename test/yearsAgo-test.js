const assert = require('assert');
var yearsAgo = require('../yearsAgo.js');

describe('yearsAgo()', function() {
    it('it should display how many years ago from today', function() {
        assert.equal(yearsAgo(2000), 17 + " years ago");
    });
    it('it should display how many years ago from today', function() {
        // this test will fail - can you fix it?
        assert.equal(1 + " years ago", yearsAgo(2016));
    });
});
