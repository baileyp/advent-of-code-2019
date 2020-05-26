'use strict';

const assert = require('assert');
const map = require('../../../lib/collection/map');

describe('Map Module', () => {
    describe('#int', () => {
        it('should convert numeric strings to base 10 integers', () => {
            assert.strictEqual(map.int('1'), 1);
            assert.strictEqual(map.int('-1'), -1);
            assert.strictEqual(map.int('08'), 8);
        });

        it('should return NaN for non-numeric values', () => {
            assert.strictEqual(map.int([]), Number.NaN);
            assert.strictEqual(map.int({}), Number.NaN);
            assert.strictEqual(map.int(true), Number.NaN);
        });
    });
});
