'use strict';

const reduce = require('../collection/reduce');
const map = require('../collection/map');

module.exports = {
    part1: function(input) {
        return input.split("\n")
            .map(map.int)
            .map(this.fuelRequirements)
            .reduce(reduce.sum)
    },

    part2: function(input) {
        return input.split("\n")
            .map(map.int)
            .map(this.trueFuelRequirements)
            .reduce(reduce.sum)
    },

    fuelRequirements: function(mass) {
        return Math.floor(mass / 3) - 2;
    },

    trueFuelRequirements: function(mass) {
        let total = 0;
        do {
            mass = module.exports.fuelRequirements(mass);
            total += Math.max(mass, 0);
        }
        while (mass > 0);
        return total;
    }
};
