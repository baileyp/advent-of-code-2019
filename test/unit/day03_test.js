'use strict';

const assert = require('assert');
const solution = require('../../lib/solution/day03');
const CENTER = new solution.Point(0, 0);
const input1 = [
    [CENTER, {x: 1, y: 0}, 'R', 'right'],
    [CENTER, {x: -1, y: 0}, 'L', 'left'],
    [CENTER, {x: 0, y: -1}, 'U', 'up'],
    [CENTER, {x: 0, y: 1}, 'D', 'down'],
];

describe('Unit: Day 03 Module', () => {
    describe('#parseLine()', () => {
        it('should parse a line into vector objects', () => {
            assert.deepStrictEqual(solution.parseLine('R123,U789'), [
                {direction: 'R', distance: 123},
                {direction: 'U', distance: 789},
            ]);
        });
    });

    describe('#manhattanDistance()', () => {
        it('should calculate the manhattan distance between two points', () => {
            assert.strictEqual(solution.manhattanDistance({x: -2, y: 4}, {x: 5, y: 7}), 10)
        });
    });

    describe('#movePoint()', () => {
        for (const data of input1) {
            it(`Direction  ${data[2]} should move a point ${data[3]} by 1`, () => {
                // Note: not a true unit test because I didn't bother mocking solution.Point
                const moved = solution.movePoint(data[0], data[2]);
                assert.strictEqual(moved.x, data[1].x)
                assert.strictEqual(moved.y, data[1].y)
            });
        }

        it('should throw an exception for unrecognized directions', () => {
            assert.throws(() => {solution.movePoint({}, null)})
        });
    });

    describe('#point()', () => {
        const point = new solution.Point(0, 0);
        assert.deepStrictEqual(point, CENTER);

        const moved = point.move(4, -5);
        moved.x = 10;
        moved.y = 10;
        assert.deepStrictEqual(point, CENTER);
        assert.strictEqual(moved.x, 4);
        assert.strictEqual(moved.y, -5);

        assert.strictEqual(point.toString(), '0,0');
        assert.strictEqual(moved.toString(), '4,-5');
    });
});
