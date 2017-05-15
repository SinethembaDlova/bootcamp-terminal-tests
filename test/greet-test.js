const assert = require('assert');
var greet = require('../greet.js');

describe('greet()', function() {
    it('should greet Sinethemba correctly', function() {
        assert.equal(greet('Sinethemba'), 'Hello, Sinethemba');
    });
    it('should greet Abongile correctly', function() {
        // this test will fail - can you fix it?
        assert.equal('Hello, Abongile', greet('Abongile'));
    });
});
