const assert = require('assert');
var findItemsOver20 = require('../findItemsOver20.js');

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
        name: 'Sugar',
        price: 25
    },
    {
        name: 'Salt',
        price: 13
    },
    {
        name: 'Spice',
        price: 15
    },
    {
        name: 'Meat',
        price: 28
    }
];


describe('findItemsOver20()', function() {
    it('it should display items that are over 20', function() {
        assert.deepEqual(findItemsOver20(itemList2), [{
                name: 'Sugar',
                price: 25
            },
            {
                name: 'Meat',
                price: 28
            }
        ]);
    });

    it('it should display items that are over 20', function() {
        assert.deepEqual(findItemsOver20(itemList), [{
                name: 'pears',
                price: 37
            },
            {
                name: 'bananas',
                price: 27
            }
        ]);
    });
});
