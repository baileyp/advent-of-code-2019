'use strict';

const map = require('../collection/map');

module.exports = {
    part1: function(input) {
        let program = input.split(',').map(map.int);
        program[1] = 12;
        program[2] = 2;
        program = this.runProgram(program);
        return program[0]
    },

    part2: function(input) {
        let original_program = input.split(',').map(map.int);
        for (let one = 0; one < 100; one++) {
            for (let two = 0; two < 100; two++) {
                let program = original_program.slice(0);
                program[1] = one;
                program[2] = two;
                program = this.runProgram(program);
                if (program[0] === 19690720) {
                    return 100 * one + two;
                }
            }
        }
        throw "Design error!"
    },

    runProgram: function(memory) {
        let address = 0;

        while (memory[address] !== 99) {
            if (memory[address] === 1) {
                memory[memory[address + 3]] = memory[memory[address + 1]] + memory[memory[address + 2]]
            }
            else if (memory[address] === 2) {
                memory[memory[address + 3]] = memory[memory[address + 1]] * memory[memory[address + 2]]
            }
            else {
                throw "Design error!"
            }
            address += 4
        }

        return memory;
    }
};
