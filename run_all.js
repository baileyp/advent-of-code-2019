'use strict';

const exec = require('child_process').exec;
const colors = require('colors');

/**
 * Execute simple shell command (async wrapper).
 * @param {String} cmd
 * @return {Object} { stdout: String, stderr: String }
 */
async function sh(cmd) {
    return new Promise(function (resolve, reject) {
        exec(cmd, (err, stdout, stderr) => {
            if (err) {
                reject(err);
            } else {
                resolve({ stdout, stderr });
            }
        });
    });
}

async function main() {
    for (let day = 1; day <= 25; day++) {
        try {
            let {stdout} = await sh(`node aoc.js ${day} 1 && node aoc.js ${day} 2`);
            const [part1, part2] = stdout.trim().split("\n")
            console.log(`Day ${colors.red(day)} Part ${colors.green(1)}: ${colors.yellow(part1)} Part ${colors.green(2)}: ${colors.yellow(part2)}`);
        }
        catch (e) {
            console.log(colors.black.bgRed(`Day ${day} incomplete`));
        }
    }
}

main();
