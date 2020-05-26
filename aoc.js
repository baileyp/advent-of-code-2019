'use strict';

const fs = require('fs');
const args = process.argv.slice(2);

let day = parseInt(args[0], 10);
let part = args[1];

if (day < 1 || day > 25) {
    return console.error("Day must be between 1 and 25");
}

if (part !== '1' && part !== '2') {
    return console.error("Part must be 1 or 2");
}

day = day.toString().padStart(2, '0');
part = `part${part}`;

const input = args[2] || `./resources/day${day}.txt`;

const runner = function(input) {
    return require(`./lib/solution/day${day}.js`)[part](input);
};

fs.stat(input, (err, stats) => {
    if (!stats) {
        return console.log(runner(input));
    }

    if (!stats.isFile()) {
        return console.error("Invalid input file specified");
    }

    fs.readFile(input, 'utf8', (err, data) => {
        console.log(runner(data.trim()));
    });
});



