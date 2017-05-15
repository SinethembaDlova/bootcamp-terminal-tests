const assert = require('assert');
var findItemsOver = require('../findItemsOver.js');

var itemList = [{
        name: 'apples',
        price: 10
    },
    {
        name: 'pears',
        price: 37
    },
    {
        name: 'bananas',
        price: 27
    },
    {
        name: 'apples',
        price: 3
    }
];

var itemList2 = [{
        name: 'coffee',
        price: 25
    },
    {
        name: 'tea',
        price: 15
    },
    {
        name: 'sandwich',
        price: 25
    },
    {
        name: 'muffin',
        price: 10
    }
];

describe('findItemsOver()', function() {
    it('it should display items that are over 20', function() {
        assert.deepEqual(findItemsOver(itemList, 20), [{
                name: 'pears',
                price: 37
            },
            {
                name: 'bananas',
                price: 27
            },
        ])
    });
    it('it should display items that are over 20', function() {
        // this test will fail - can you fix it?
        assert.deepEqual(findItemsOver(itemList2, 20), [{
                name: 'coffee',
                price: 25
            },
            {
                name: 'sandwich',
                price: 25
            }
        ]);
    });
});
