'use strict';

const assert = require('assert');
const solution = require('../../lib/solution/day02');

const input1 = [
    [[1, 0, 0, 0, 99], [2, 0, 0, 0, 99]],
    [[2,3,0,3,99], [2,3,0,6,99]],
    [[2,4,4,5,99,0], [2,4,4,5,99,9801]],
    [[1,1,1,4,99,5,6,0,99], [30,1,1,4,2,5,6,0,99]]
];

describe('Day 02 Module', () => {
    describe('#runProgram()', () => {
        it('should run the intcode program and return the final program state', () => {
            for (const data of input1) {
                assert.deepStrictEqual(solution.runProgram(data[0]), data[1]);
            }
        });
    });
});
