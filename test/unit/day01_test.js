'use strict';

const assert = require('assert');
const solution = require('../../lib/solution/day01');

const input1 = [
    [12, 2],
    [14, 2],
    [1969, 654],
    [100756, 33583],
];

const input2 = [
    [12, 2],
    [1969, 966],
    [100756, 50346],
];

describe('Unit: Day 01 Module', () => {
    describe('#fuelRequirements()', () => {
        it('should calculate fuel requirements based on mass', () => {
            for (const data of input1) {
                assert.strictEqual(solution.fuelRequirements(data[0]), data[1]);
            }
        });
    });

    describe('#trueFuelRequirements()', () => {
        it('should calculate fuel requirements accommodating for extra mass the fuel adds', () => {
            for (const data of input2) {
                assert.strictEqual(solution.trueFuelRequirements(data[0]), data[1]);
            }
        });
    });
});
