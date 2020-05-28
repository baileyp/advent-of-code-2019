'use strict';

const map = require('../collection/map');

module.exports = {
    part1: function(input) {
        const [lower, upper] = input.split('-').map(map.int);
        let validPasswords = 0;

        for (let password = lower; password <= upper; password++) {
            if (this.isValidPassword(password.toString())) {
                validPasswords++;
            }
        }

        return validPasswords;
    },

    part2: function(input) {
        const [lower, upper] = input.split('-').map(map.int);
        let validPasswords = 0;

        for (let password = lower; password <= upper; password++) {
            if (this.isValidPasswordStrict(password.toString())) {
                validPasswords++;
            }
        }

        return validPasswords;
    },

    isValidPassword: function(password) {
        return this.hasAdjacentDuplicate(password) && this.neverDecreases(password);
    },

    isValidPasswordStrict: function(password) {
        return this.hasAdjacentDuplicate(password, true) && this.neverDecreases(password);
    },

    hasAdjacentDuplicate: function(password, enforce_isolation=false) {
        for (let left = 0, right = 1; right < password.length; left++, right++) {
            if (password[left] === password[right]) {
                if (!enforce_isolation || this.pairIsIsolated(password, left)) {
                    return true;
                }
            }
        }
        return false;
    },

    pairIsIsolated: function(password, left) {
        const right = left + 1;
        const char = password[left];
        const extendsLeft = left > 0 && password[left - 1] === char;
        const extendsRight = right < password.length && password[right + 1] === char;
        return !extendsLeft && !extendsRight;
    },

    neverDecreases: function(password) {
        let previous = -1;
        for (const chr of password) {
            if (chr < previous) {
                return false;
            }
            previous = chr;
        }
        return true;
    },
};
