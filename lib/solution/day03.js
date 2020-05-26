'use strict';

module.exports = {
    part1: function(input) {
        const [line1, line2] = input.split("\n").map(this.parseLine);
        const CENTER = new this.Point(0, 0);
        const grid = new Set();
        let cursor = CENTER;
        let closest = Number.MAX_SAFE_INTEGER;

        // Map out the first line
        for (const vector of line1) {
            for (let i = 0; i < vector.distance; i++) {
                cursor = this.movePoint(cursor, vector.direction);
                grid.add(cursor.toString())
            }
        }

        // Now trace the second line and measure any crossing points
        cursor = CENTER;
        for (const vector of line2) {
            for (let i = 0; i < vector.distance; i++) {
                cursor = this.movePoint(cursor, vector.direction);
                if (grid.has(cursor.toString())) {
                    if (cursor !== CENTER) {
                       closest = Math.min(closest, this.manhattanDistance(cursor, CENTER));
                    }
                }
            }
        }

        return closest;
    },

    part2: function(input) {
        const [line1, line2] = input.split("\n").map(this.parseLine);
        const CENTER = new this.Point(0, 0);
        const grid = new Map();
        let cursor = CENTER;
        let fewest_steps = Number.MAX_SAFE_INTEGER;
        let num_steps = 1;

        // Map out the first line, storing the number of steps at each point
        for (const vector of line1) {
            for (let i = 0; i < vector.distance; i++, num_steps++) {
                cursor = this.movePoint(cursor, vector.direction);
                grid.set(cursor.toString(), num_steps);
            }
        }

        // Now trace the second line and sum traversed distances
        cursor = CENTER;
        num_steps = 1;
        for (const vector of line2) {
            for (let i = 0; i < vector.distance; i++, num_steps++) {
                cursor = this.movePoint(cursor, vector.direction);
                if (grid.has(cursor.toString())) {
                    if (cursor !== CENTER) {
                        fewest_steps = Math.min(fewest_steps, grid.get(cursor.toString()) + num_steps);
                    }
                }
            }
        }

        return fewest_steps;
    },

    parseLine: function(line) {
        return line.split(',').map(item => {
            return {
                direction: item[0],
                distance: parseInt(item.substring(1), 10),
            };
        });
    },

    manhattanDistance: function(p1, p2) {
        return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);
    },

    movePoint: function(point, direction) {
        switch (direction) {
            case 'R':
                point = point.move(1);
                break;
            case 'L':
                point = point.move(-1);
                break;
            case 'U':
                point = point.move(0, -1);
                break;
            case 'D':
                point = point.move(0, 1);
                break;
            default:
                throw "Invalid direction!"
        }
        return point
    },
};

class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }

    set x(x) {
        return new Point(x, this._y);
    }

    get y() {
        return this._y;
    }

    set y(y) {
        return new Point(this._x, y);
    }

    move(deltaX=0, deltaY=0) {
        return new Point(this._x + deltaX, this._y + deltaY);
    }

    toString() {
        return `${this._x},${this._y}`;
    }
}

module.exports.Point = Point;
