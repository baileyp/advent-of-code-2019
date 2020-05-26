'use strict';

const assert = require('assert');
const solution = require('../../lib/solution/day03');

const input1 = [
    [["R8,U5,L5,D3", "U7,R6,D4,L4"].join("\n"), 6],
    [["R75,D30,R83,U83,L12,D49,R71,U7,L72", "U62,R66,U55,R34,D71,R55,D58,R83"].join("\n"), 159],
    [["R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51", "U98,R91,D20,R16,D67,R40,U7,R15,U6,R7"].join("\n"), 135],
];

const input2 = [
    [["R8,U5,L5,D3", "U7,R6,D4,L4"].join("\n"), 30],
    [["R75,D30,R83,U83,L12,D49,R71,U7,L72", "U62,R66,U55,R34,D71,R55,D58,R83"].join("\n"), 610],
    [["R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51", "U98,R91,D20,R16,D67,R40,U7,R15,U6,R7"].join("\n"), 410],
];

describe('Integration: Day 03 Module', () => {
    describe('#part1()', () => {
        it('should return correct answers for all sample data', () => {
            for (const data of input1) {
                assert.strictEqual(solution.part1(data[0]), data[1]);
            }
        });
    });

    describe('#part2()', () => {
        it('should return correct answers for all sample data', () => {
            for (const data of input2) {
                assert.strictEqual(solution.part2(data[0]), data[1]);
            }
        });
    });
});
