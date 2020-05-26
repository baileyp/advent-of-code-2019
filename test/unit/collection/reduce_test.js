'use strict';

const assert = require('assert');
const reduce = require('../../../lib/collection/reduce');

describe('Unit: Reduce Module', () => {
    describe('#sum', () => {
        it('should sum two integers', () => {
            assert.strictEqual(reduce.sum(1, 2), 3);
            assert.strictEqual(reduce.sum(-1, 1), 0);
        });

        it('should also work with Array.reduce()', () => {
            assert.strictEqual([-4, 3, 12, -6].reduce(reduce.sum), 5);
        });
    });
});
