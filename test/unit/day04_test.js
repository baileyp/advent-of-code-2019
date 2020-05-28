'use strict';

const assert = require('assert');
const solution = require('../../lib/solution/day04');

const input1 = [
    ['111111', true, true, false],
    ['223450', true, false, true],
    ['123789', false, true, true],
    ['123799', true, true, true],
    ['112233', true, true, true],
    ['123444', true, true, false],
];

const input2 = [
    ['112233', 0, true],
    ['112233', 2, true],
    ['112233', 4, true],
    ['123444', 3, false],
    ['123444', 4, false],
    ['111122', 0, false],
    ['111122', 1, false],
    ['111122', 2, false],
    ['111122', 3, false],
    ['111122', 4, true],
    ['123334', 2, false],
    ['123333', 2, false]
];

describe('Unit: Day 04 Module', () => {
    describe('#hasAdjacentDuplicate()', () => {
        for (const data of input1) {
            it(`should ${data[1]?'find':'not find'} a duplicate in '${data[0]}'`, () => {
                assert.strictEqual(solution.hasAdjacentDuplicate(data[0]), data[1]);
            });
        }
    });

    describe('#neverDecreases()', () => {
        for (const data of input1) {
            it(`should ${data[2]?'not find':'find'} decreasing values in '${data[0]}'`, () => {
                assert.strictEqual(solution.neverDecreases(data[0]), data[2]);
            });
        }
    });

    describe('#isValidPassword()', () => {
        for (const data of input1) {
            const valid = data[1] && data[2];
            it(`should ${valid?'find':'not find'} '${data[0]}' to be valid`, () => {
                assert.strictEqual(solution.isValidPassword(data[0]), valid);
            });
        }
    });

    describe('#isValidPasswordStrict()', () => {
        for (const data of input1) {
            const valid = data[1] && data[2] && data[3];
            it(`should ${valid?'find':'not find'} '${data[0]}' to be valid`, () => {
                assert.strictEqual(solution.isValidPasswordStrict(data[0]), valid);
            });
        }
    });

    describe('#pairIsIsolated()', () => {
        for (const data of input2) {
            it(`should ${data[2]?'find':'not find'} '${data[0]}' to be valid`, () => {
                assert.strictEqual(solution.pairIsIsolated(data[0], data[1]), data[2]);
            });
        }
    });
});
